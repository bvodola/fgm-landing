import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import scrollTo from "gatsby-plugin-smoothscroll";
import { H1 } from "../../components/index";
import { Row, Col } from "../../components/Grid";
import theme from "../../theme";
import { Link } from "gatsby";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Gotham Book';
  }
  * {
    box-sizing: border-box;
  }
`;

const padded = `
  padding-left: 10%;
  padding-right: 10%;
`;

const Section = styled.div`
  ${padded}
  padding-top: 72px;
  padding-bottom: 72px;
`;

const Nav = styled.nav`
  position: fixed;
  background: #fff;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  ${padded}

  @media(max-width: 900px) {
    .menu {
      li,
      span {
        display: none !important;
      }

      li.visible-mobile {
        display: block !important;
      }
    }
  }

  .logo {
    img {
      height: 40px;
    }
  }

  .menu {
    list-style-type: none;
    display: flex;

    li {
      a {
        text-decoration: none;
        color: #000;
        font-size: 18px;
        margin: 0 10px;
      }
      a.featured {
        font-family: "Gotham";
        font-weight: 500;
        color: ${theme.red};
      }
    }
  }
`;

const WinnersSection = styled(Section)`
  padding-left: 20%;
  padding-right: 20%;

  @media (max-width: 1200px) {
    padding-left: 10%;
    padding-right: 10%;
  }

  h1 {
    margin-bottom: 0;
    color: ${theme.darkBlue};
  }
  h2 {
    margin: 0;
    margin-bottom: 48px;
    color: ${theme.darkGray};
  }

  img {
    width: 200px;
    border-radius: 100%;
  }

  b {
    color: ${theme.darkBlue};
    font-family: "Gotham";
    font-weight: 500;
    margin-top: 24px;
    font-size: 20px;
  }

  p {
    margin-top: 0;
    color: ${theme.darkGray};
    font-size: 20px;
  }
`;

const Footer = styled.footer`
  background: ${theme.darkBlue};
  color: white;
  padding: 32px 10px;
  p {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link href="/fonts/gotham/stylesheet.css" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />

        <Nav>
          <div className="logo">
            <img src="/fgm-logo.png" alt="Logo FGM" />
          </div>
          <ul className="menu">
            <li>
              <a onClick={() => scrollTo("#home")}>Home</a>
            </li>
          </ul>
        </Nav>

        <WinnersSection>
          <Row>
            <Col>
              <H1>Obrigado!</H1>
              <h2>Você agora está participando do nosso sorteio!</h2>
              <Link to="/landing">
                Clique aqui para voltar para a página do sorteio
              </Link>
            </Col>
          </Row>
        </WinnersSection>
        <Footer>
          <p>
            Política de Privacidade ©2020 FGM. Todos os direitos reservados.{" "}
            <br />
            CERTIFICADO DE AUTORIZAÇÃO SECAP/MF N. ° 06.007002/2019
          </p>
        </Footer>
      </div>
    );
  }
}

export default Landing;
