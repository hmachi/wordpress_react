import * as React from "react";
import { FC, useState } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import axios, { AxiosError } from "axios";

import Const from "../../common/const";

const Container = styled.div`
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
`;

type RouteProps = RouteComponentProps<{ postId?: string }>;

type IErrorResponse = {
  error: string;
};

const process = async (url: string) => {
  let data: any = null;
  await axios
    .get(url)
    .then((response: any) => {
      console.log(response);
      data = response;
    })
    .catch(async (error: AxiosError<IErrorResponse>) => {
      console.log(error);
    });

  return data;
};

/* 投稿ページ */
const Post: FC<RouteProps> = (props) => {
  const [dom, setDom] = useState<string>("");

  return (
    <Container>
      投稿ページ
      <div dangerouslySetInnerHTML={{ __html: dom }}></div>
    </Container>
  );
};

export default Post;
