import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Header from "./pages/layouts/header";
import Menu from "./pages/layouts/menu";
import Main from "./pages/layouts/main";
import Footer from "./pages/layouts/footer";

const App = () => {
  const [isDispMenu, setIsDispMenu] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Header isDispMenu={isDispMenu} setIsDispMenu={setIsDispMenu} />
      {/* <Menu isDispMenu={isDispMenu} setIsDispMenu={setIsDispMenu} /> */}
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
