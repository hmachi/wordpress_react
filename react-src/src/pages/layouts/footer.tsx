import * as React from "react";
import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";

import Const from "../../common/const";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  background-color: black;
  width: 100%;
`;

const FooterContent = styled.div`
  &::after {
    clear: both;
    display: block;
    content: "";
  }
`;

const FooterLeft = styled.div`
  float: left;
  padding: 30px;
  color: #fff;
`;

const FooterIconLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const FooterIcon = styled.img`
  vertical-align: middle;
`;

const FooterTitle = styled.span`
  color: #ddd;
  padding-left: 10px;
`;

const FooterRight = styled.div`
  float: right;
  padding: 10px 30px 0px 0px;
`;

const FooterMenuRow = styled.div`
  width: 250px;
  border-bottom: 1px solid #aaa;
  &:hover {
    border-bottom: 1px solid #0bd;
  }
`;

const FooterLink = styled(Link)`
  padding: 15px 0px 0px 0px;
  display: block;
  font-size: 10pt;
  width: 100%;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #0bd;
  }
`;

const CopyrightRow = styled.div`
  color: #fff;
  text-align: center;
  padding: 5px 0px;
`;

type BlogInfoData = {
  title: string;
  description: string;
};

type FooterMenuData = {
  id: number;
  objectId: number;
  title: string;
  pageType: string;
};

type GetBlogInfoProcess = (processCnt: number) => Promise<BlogInfoData>;

type GetFooterMenuProcess = (processCnt: number) => Promise<FooterMenuData[]>;

type IErrorResponse = {
  error: string;
};

/* 設定情報取得 */
const getBlogInfoProcess: GetBlogInfoProcess = async (processCnt) => {
  let blogInfo: BlogInfoData = {
    title: "",
    description: "",
  };
  await axios
    .get(Const.URL.API.GET_BLOG_INFO)
    .then((response: any) => {
      blogInfo = response.data;
    })
    .catch(async (error: AxiosError<IErrorResponse>) => {
      console.log(error);
      processCnt -= 1;
      processCnt === 0
        ? alert("設定情報取得失敗")
        : await getBlogInfoProcess(processCnt);
    });

  return blogInfo;
};

/* フッターメニュー一覧取得 */
const getFooterMenuProcess: GetFooterMenuProcess = async (processCnt) => {
  let footerMenuData: FooterMenuData[] = [];
  await axios
    .get(Const.URL.API.GET_FOOTER_MENU)
    .then((response: any) => {
      footerMenuData = response.data;
    })
    .catch(async (error: AxiosError<IErrorResponse>) => {
      console.log(error);
      processCnt -= 1;
      processCnt === 0
        ? alert("フッターメニュー取得失敗")
        : await getFooterMenuProcess(processCnt);
    });

  return footerMenuData;
};

const Footer = () => {
  const [blogInfo, setBlogInfo] = useState<BlogInfoData>({
    title: "",
    description: "",
  });
  const [footerMenuList, setFooterMenuList] = useState<FooterMenuData[]>([]);

  useEffect(() => {
    getBlogInfo();
    getFooterMenu();
  }, []);

  const getBlogInfo = async () => {
    setBlogInfo(await getBlogInfoProcess(Const.MAX_GET_PROCESS_CNT));
  };

  const getFooterMenu = async () => {
    setFooterMenuList(await getFooterMenuProcess(Const.MAX_GET_PROCESS_CNT));
  };

  return (
    <Container>
      <FooterContent>
        <FooterLeft>
          <FooterIconLink to={`${Const.WEB_BASE_URL}`}>
            <FooterIcon src={Const.URL.IMAGE.FAVICON} alt="hmachi" />
            <FooterTitle>{blogInfo.title}</FooterTitle>
          </FooterIconLink>
        </FooterLeft>
        <FooterRight>
          {footerMenuList.map((footerMenu) => (
            <FooterMenuRow key={footerMenu.id}>
              {footerMenu.pageType == Const.STR.PAGE ? (
                <FooterLink to={`${Const.URL.WEB.PAGE}/${footerMenu.objectId}`}>
                  {footerMenu.title}
                </FooterLink>
              ) : footerMenu.pageType == Const.STR.CATEGORY ? (
                <FooterLink
                  to={`${Const.URL.WEB.CATEGORY}/${footerMenu.objectId}`}
                >
                  {footerMenu.title}
                </FooterLink>
              ) : footerMenu.pageType == Const.STR.POST ? (
                <FooterLink to={`${Const.URL.WEB.POST}/${footerMenu.objectId}`}>
                  {footerMenu.title}
                </FooterLink>
              ) : (
                <></>
              )}
            </FooterMenuRow>
          ))}
        </FooterRight>
      </FooterContent>
      <CopyrightRow>
        <small>&#169; 2021 hmachi.</small>
      </CopyrightRow>
    </Container>
  );
};

export default Footer;
