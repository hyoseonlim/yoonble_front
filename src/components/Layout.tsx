import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDesktopState } from "../recoil/atom";
import Router from "../Router";
import Footer from "./Footer";

const LayoutContainer = styled.div<{ isDesktop: boolean }>`
  margin-left: ${(props) => (props.isDesktop ? "20vw" : "0")};
  width: ${(props) => (props.isDesktop ? "calc(100vw - 20vw)" : "100vw")};
  transition: all 0.3s ease-in-out;
`;

const Layout = () => {
  const isDesktop = useRecoilValue(isDesktopState);

  return (
    <LayoutContainer isDesktop={isDesktop}>
      <Router />
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
