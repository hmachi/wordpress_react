import * as React from "react";
import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";

import Const from "../../common/const";

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 10px 0px 15px 0px;
  position: fixed;
  z-index: 10;
  background-color: #fff;
`;

const HeaderContent = styled.div`
  &::after {
    clear: both;
    display: block;
    content: "";
  }
`;

const HeaderLeft = styled.div`
  float: left;
  padding: 5px 0px 0px 10px;
`;

const HeaderRight = styled.div`
  float: right;
  padding: 0px 10px;
  margin-top: 5px;
`;

const DispMenuWrap = styled.div`
  display: block;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const DispMenuIconWrap = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

const HeaderItem = styled.div`
  float: left;
  margin-right: 30px;
  text-decoration: none;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-size: 11pt;
  &:hover {
    color: #0bd;
    border-bottom: 1px solid #0bd;
  }
`;

const HeaderIconLink = styled(Link)`
  text-decoration: none;
`;

const HeaderIcon = styled.img`
  vertical-align: middle;
`;

const HeaderTitle = styled.span`
  padding-left: 5px;
  color: black;
  font-weight: bold;
`;

type Props = {
  isDispMenu: boolean;
  setIsDispMenu: Function;
};

type BlogInfoData = {
  title: string;
  description: string;
};

type HeaderMenuData = {
  id: number;
  objectId: number;
  title: string;
  pageType: string;
};

type GetBlogInfoProcess = (processCnt: number) => Promise<BlogInfoData>;

type GetHeaderMenuProcess = (processCnt: number) => Promise<HeaderMenuData[]>;

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

/* ヘッダーメニュー一覧取得 */
const getHeaderMenuProcess: GetHeaderMenuProcess = async (processCnt) => {
  let headerMenuList: HeaderMenuData[] = [];
  await axios
    .get(Const.URL.API.GET_HEADER_MENU)
    .then((response: any) => {
      headerMenuList = response.data;
    })
    .catch(async (error: AxiosError<IErrorResponse>) => {
      console.log(error);
      processCnt -= 1;
      processCnt === 0
        ? alert("メニュー一覧失敗")
        : await getHeaderMenuProcess(processCnt);
    });

  return headerMenuList;
};

const Header: FC<Props> = (props) => {
  const [blogInfo, setBlogInfo] = useState<BlogInfoData>({
    title: "",
    description: "",
  });
  const [headerMenuList, setHeaderMenuList] = useState<HeaderMenuData[]>([]);

  useEffect(() => {
    getBlogInfo();
    getheaderMenu();
  }, []);

  const getBlogInfo = async () => {
    setBlogInfo(await getBlogInfoProcess(Const.MAX_GET_PROCESS_CNT));
  };

  const getheaderMenu = async () => {
    setHeaderMenuList(await getHeaderMenuProcess(Const.MAX_GET_PROCESS_CNT));
  };

  return (
    <Container>
      <HeaderContent>
        <HeaderLeft>
          <HeaderIconLink to={`${Const.WEB_BASE_URL}`}>
            <HeaderIcon src={Const.URL.IMAGE.FAVICON} alt="hmachi" />
            <HeaderTitle>{blogInfo.title}</HeaderTitle>
          </HeaderIconLink>
        </HeaderLeft>
        <HeaderRight>
          <DispMenuWrap>
            {headerMenuList.map((headerMenu) => (
              <HeaderItem key={headerMenu.id}>
                {headerMenu.pageType == Const.STR.PAGE ? (
                  <HeaderLink
                    to={`${Const.URL.WEB.PAGE}/${headerMenu.objectId}`}
                  >
                    {headerMenu.title}
                  </HeaderLink>
                ) : headerMenu.pageType == Const.STR.CATEGORY ? (
                  <HeaderLink
                    to={`${Const.URL.WEB.CATEGORY}/${headerMenu.objectId}`}
                  >
                    {headerMenu.title}
                  </HeaderLink>
                ) : headerMenu.pageType == Const.STR.POST ? (
                  <HeaderLink
                    to={`${Const.URL.WEB.POST}/${headerMenu.objectId}`}
                  >
                    {headerMenu.title}
                  </HeaderLink>
                ) : (
                  <></>
                )}
              </HeaderItem>
            ))}
          </DispMenuWrap>
          {/* TODO メニューアイコンの表示 */}
          {/* クリック時にメニュー画面を開く */}
          <DispMenuIconWrap>メニュー</DispMenuIconWrap>
        </HeaderRight>
      </HeaderContent>
    </Container>
  );
};

export default Header;
