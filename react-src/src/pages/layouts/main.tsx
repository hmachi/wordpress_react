import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import FrontPage from "../main/front-page"; // トップページ
import Page from "../main/page"; // 固定ページ
import Category from "../main/category"; // カテゴリーページ
import Post from "../main/post"; // 投稿ページ

import Const from "../../common/const";

const Container = styled.div`
  top: 56px;
  position: relative;
`;

const Main = () => {
  return (
    <Container>
      <Switch>
        <Route
          path={Const.URL.WEB.FRONT_PAGE}
          exact
          render={() => <FrontPage />}
        />
        <Route
          path={`${Const.URL.WEB.PAGE}/:pageId`}
          render={(routeProps) => <Page {...routeProps} />}
        />
        <Route
          path={`${Const.URL.WEB.CATEGORY}/:categoryId`}
          render={(routeProps) => <Category {...routeProps} />}
        />
        <Route
          path={`${Const.URL.WEB.POST}/:postId`}
          render={(routeProps) => <Post {...routeProps} />}
        />
        <Redirect to={Const.URL.WEB.FRONT_PAGE} />
      </Switch>
    </Container>
  );
};

export default Main;
