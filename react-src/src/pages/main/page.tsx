import * as React from "react";
import { FC, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import axios, { AxiosError } from "axios";

import Const from "../../common/const";

const Container = styled.div`
  padding: 20px 10px;
  max-width: 800px;
  margin: 0 auto;

  img {
    max-width: 800px;
    width: auto;
    height: auto;
  }
`;

type RouteProps = RouteComponentProps<{ pageId?: string }>;

type PageContentData = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  type: string;
};

type ChildrenPageData = {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  pageType: string;
  postDate: string;
  image: string;
};

type GetPageContentProcess = (
  pageId: number,
  rocessCnt: number
) => Promise<PageContentData>;

type GetChildrenPageProcess = (
  pageId: number,
  rocessCnt: number
) => Promise<ChildrenPageData[]>;

type IErrorResponse = {
  error: string;
};

/* 固定ページの内容取得 */
const getPageContentProcess: GetPageContentProcess = async (
  pageId,
  processCnt
) => {
  let pageContentData: PageContentData = {
    id: 0,
    title: {
      rendered: "",
    },
    content: {
      rendered: "",
    },
    type: "",
  };
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

/* 子ページ一覧取得 */
const getChildrenPageProcess: GetChildrenPageProcess = async (
  pageId,
  processCnt
) => {
  let childrenPageList: ChildrenPageData[] = [];
  await axios
    .get(Const.URL.API.GET_CHILDREN_PAGE + pageId)
    .then((response: any) => {
      console.log(response.data);
      childrenPageList = response.data;
    })
    .catch(async (error: AxiosError<IErrorResponse>) => {
      console.log(error);
      processCnt -= 1;
      processCnt === 0
        ? alert("子ページ一覧取得失敗")
        : await getChildrenPageProcess(pageId, processCnt);
    });

  return childrenPageList;
};

/* 固定ページ */
const Page: FC<RouteProps> = (props) => {
  const [pageContent, setPageContent] = useState<PageContentData>({
    id: 0,
    title: {
      rendered: "",
    },
    content: {
      rendered: "",
    },
    type: "",
  });
  const [childrenPageList, srtChildrenPageList] = useState<ChildrenPageData[]>(
    []
  );

  useEffect(() => {
    getPageContent();
    getChildrenPage();
  }, [props.match.params.pageId]);

  const getPageContent = async () => {
    setPageContent(
      await getPageContentProcess(
        Number(props.match.params.pageId),
        Const.MAX_GET_PROCESS_CNT
      )
    );
  };

  const getChildrenPage = async () => {
    srtChildrenPageList(
      await getChildrenPageProcess(
        Number(props.match.params.pageId),
        Const.MAX_GET_PROCESS_CNT
      )
    );
  };

  return (
    <Container>
      {childrenPageList.length == 0 ? (
        <div
          dangerouslySetInnerHTML={{ __html: pageContent.content.rendered }}
        ></div>
      ) : (
        <div>
          {childrenPageList.map((childrenPage) => (
            <div key={childrenPage.id}>
              <div
                dangerouslySetInnerHTML={{
                  __html: childrenPage.image,
                }}
              ></div>
              <span>{childrenPage.title}</span>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Page;
