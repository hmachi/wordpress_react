import * as React from "react";
import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";

import Const from "../../common/const";

type Props = {
  isDispMenu: boolean;
  setIsDispMenu: Function;
};

type HeaderMenuData = {
  id: number;
  objectId: number;
  title: string;
  pageType: string;
};

type GetHeaderMenuProcess = (processCnt: number) => Promise<HeaderMenuData[]>;

type IErrorResponse = {
  error: string;
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
        ? alert("ヘッダーメニュー取得失敗")
        : await getHeaderMenuProcess(processCnt);
    });

  return headerMenuList;
};

const Menu: FC<Props> = (props) => {
  const [headerMenuList, setHeaderMenuList] = useState<HeaderMenuData[]>([]);

  useEffect(() => {
    getheaderMenu();
  }, []);

  /* フッターメニュー一覧取得 */
  const getheaderMenu = async () => {
    setHeaderMenuList(await getHeaderMenuProcess(Const.MAX_GET_PROCESS_CNT));
  };

  return (
    <div>
      <div>メニュー表示</div>
      {headerMenuList.map((headerMenu) => (
        <div key={headerMenu.id}>
          {headerMenu.pageType == Const.STR.PAGE ? (
            <Link to={`${Const.URL.WEB.PAGE}/${headerMenu.objectId}`}>
              {headerMenu.title}
            </Link>
          ) : headerMenu.pageType == Const.STR.CATEGORY ? (
            <Link to={`${Const.URL.WEB.CATEGORY}/${headerMenu.objectId}`}>
              {headerMenu.title}
            </Link>
          ) : headerMenu.pageType == Const.STR.POST ? (
            <Link to={`${Const.URL.WEB.POST}/${headerMenu.objectId}`}>
              {headerMenu.title}
            </Link>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
