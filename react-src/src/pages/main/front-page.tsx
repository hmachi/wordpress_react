import * as React from "react";
import { FC, useState } from "react";
import styled from "styled-components";
import axios, { AxiosError } from "axios";

import Const from "../../common/const";

const Container = styled.div`
  padding: 10px;
`;

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

/* トプページ */
const FrontPage = () => {
  const [dom, setDom] = useState<string>("");

  return (
    <Container>
      フロントページ
      <div dangerouslySetInnerHTML={{ __html: dom }}></div>
    </Container>
  );
};

export default FrontPage;
