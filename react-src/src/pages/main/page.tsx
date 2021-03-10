import * as React from "react";
import { FC, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import axios, { AxiosError } from "axios";

import Const from "../../common/const";

const Container = styled.div`
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
`;

type RouteProps = RouteComponentProps<{ pageId?: string }>;

type PageContentData = {};

type GetPageContentProcess = (
  pageId: number,
  rocessCnt: number
) => Promise<any>;

type IErrorResponse = {
  error: string;
};

/* 固定ページの内容取得 */
const getPageContentProcess: GetPageContentProcess = async (
  pageId,
  processCnt
) => {
  let pageContentData: PageContentData = {};
  await axios
    .get(Const.URL.API.GET_PAGE_CONTENT + pageId)
    .then((response: any) => {
      console.log(response.data);
      pageContentData = response.data;
    })
    .catch(async (error: AxiosError<IErrorResponse>) => {
      console.log(error);
      processCnt -= 1;
      processCnt === 0
        ? alert("ページデータ取得失敗")
        : await getPageContentProcess(pageId, processCnt);
    });

  return pageContentData;
};

/* 固定ページ */
const Page: FC<RouteProps> = (props) => {
  const [pageContent, setPageContent] = useState<PageContentData>({});
  const [dom, setDom] = useState<string>("");

  useEffect(() => {
    getPageContent();
  }, [props.match.params.pageId]);

  const getPageContent = async () => {
    const response = await getPageContentProcess(
      Number(props.match.params.pageId),
      Const.MAX_GET_PROCESS_CNT
    );

    setDom(response.content.rendered);

    // 以下のようにしてページのデータを取得する
    // /wp-json/wp/v2/posts/:object_id
  };

  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: dom }}></div>
    </Container>
  );
};

export default Page;
