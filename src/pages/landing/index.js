import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Button, H1 } from "../../components/index";
import { Row, Col } from "../../components/Grid";
import RegisterModal from "./_components/RegisterModal";
import LoginModal from "./_components/LoginModal";
import theme from "../../theme";

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

const Banner = styled.div`
  padding-top: 60px;
  background-image: url("/yellow-bg.jpg");
  background-size: cover;

  .hero {
    max-width: 550px;
    width: 100%;
  }

  .cta {
    flex-direction: column;
    text-align: center;

    h1 {
      color: ${theme.darkBlue};
      text-transform: uppercase;
      font-family: "Gotham";
      font-weight: 700;
      text-shadow: 2px 2px 0px #caa23b;
      font-size: 30px;
    }

    h2 {
      color: ${theme.darkGray};
      text-shadow: 1px 1px 0px #caa23b;
      font-size: 20px;
    }
  }

  .packs {
    margin-top: 20px;
    img.pack {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    padding-top: 32px;
    .cta {
      h1 {
        font-size: 24px;
      }
    }
  }
`;

const Number = styled.div`
  color: ${theme.yellow};
  background-color: ${theme.darkBlue};
  border-radius: 100%;
  font-family: "Gotham";
  font-weight: 700;
  width: 48px;
  height: 48px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0 0 0;
`;

const HowToSection = styled(Section)`
  padding-top: 0;
  p {
    font-size: 20px;
    text-align: center;

    mark {
      background: transparent;
      color: ${theme.red};
      font-family: "Gotham";
      font-weight: 700;
    }
  }
`;

const FAQSection = styled(Section)`
  h1 {
    color: white;
  }
  h3 {
    width: 100%;
    text-align: left;
    font-family: "Gotham";
    font-weight: 700;
    margin: 48px 0 0 0;
  }
  background: ${theme.darkBlue};
  color: white;

  button {
    margin-top: 32px;
    background-color: #fff;
    color: ${theme.darkBlue};
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

const RulesSection = styled(Section)`
  background: ${theme.darkYellow};
  color: ${theme.darkBlue};

  p {
    font-size: 20px;
  }

  button {
    background: transparent;
    border: 1px solid ${theme.darkBlue};
    color: ${theme.darkBlue};
    font-size: 24px;
    margin-top: 20px;
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
  constructor() {
    super();
    this.state = {
      isRegisterModalOpened: false,
      isLoginModalOpened: false
    };
    this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleRegisterModal(ev) {
    ev.preventDefault();
    this.setState({ isRegisterModalOpened: !this.state.isRegisterModalOpened });
  }

  toggleLoginModal(ev) {
    ev.preventDefault();
    this.setState({ isLoginModalOpened: !this.state.isLoginModalOpened });
  }

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
            <span>|</span>
            <li>
              <a
                className="featured"
                href="#"
                onClick={this.toggleRegisterModal}
              >
                Participar
              </a>
            </li>
            <span>|</span>
            <li className="visible-mobile">
              <a href="#" onClick={this.toggleLoginModal}>
                Login
              </a>
            </li>
            <span>|</span>
            <li>
              <a onClick={() => scrollTo("#faq")}>Perguntas Frequentes</a>
            </li>
            <span>|</span>
            <li>
              <a onClick={() => scrollTo("#regulamento")}>Regulamento</a>
            </li>
          </ul>
        </Nav>
        <Banner id="home">
          <Section>
            <Row>
              <Col>
                <img
                  className="hero"
                  src="/fgm-da-sorte.png"
                  alt="FGM dá Sorte"
                />
              </Col>
              <Col className="cta">
                <H1>Que tal visitar a IDS 2021 na Alemanha? Com tudo pago!</H1>
                <h2>
                  E concorrer a mais de 70 prêmios entre vale-presentes e cestas
                  de produtos FGM todo mês.
                </h2>
                <Button onClick={this.toggleRegisterModal}>Participar</Button>
              </Col>
            </Row>
            <Row className="packs">
              <Col>
                <img className="pack" src="/pack-esq.png" alt="" />
              </Col>
              <Col>
                <img className="pack" src="/pack-dir.png" alt="" />
              </Col>
            </Row>
          </Section>
        </Banner>
        <HowToSection>
          <H1 color={theme.darkBlue}>Como Participar</H1>
          <Row padded>
            <Col>
              <Number>1</Number>
              <p>
                Compre R$120 em produtos de estética ou R$200 em produtos de
                implantes
              </p>
            </Col>

            <Col>
              <Number>2</Number>
              <p>
                Clique em <mark>Participar</mark> e cadastre sua nota fiscal
                através deste site
              </p>
            </Col>

            <Col>
              <Number>3</Number>
              <p>Pronto! Você já está concorrendo a prêmios todos os meses</p>
            </Col>
          </Row>
          <Row padded>
            <Col>
              <H1 color={theme.red}>Comece a concorrer agora mesmo</H1>
              <Button onClick={this.toggleRegisterModal}>Participar</Button>
            </Col>
          </Row>
        </HowToSection>
        <FAQSection id="faq">
          <H1>Perguntas Frequentes</H1>
          <Row>
            <Col>
              <h3>Como faço para participar?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                mattis lobortis semper. Aliquam libero est, pharetra id risus
                quis, vehicula pellentesque eros. Donec vitae odio id nunc
                tristique convallis ut et turpis.
              </p>
              <h3>Qual período de validade da promoção?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                mattis lobortis semper. Aliquam libero est, pharetra id risus
                quis, vehicula pellentesque eros. Donec vitae odio id nunc
                tristique convallis ut et turpis.
              </p>
            </Col>

            <Col>
              <h3>Qual valor em produtos preciso comprar?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                mattis lobortis semper. Aliquam libero est, pharetra id risus
                quis, vehicula pellentesque eros. Donec vitae odio id nunc
                tristique convallis ut et turpis.
              </p>
              <h3>Como faço para recuperar meu cadastro?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                mattis lobortis semper. Aliquam libero est, pharetra id risus
                quis, vehicula pellentesque eros. Donec vitae odio id nunc
                tristique convallis ut et turpis.
              </p>
            </Col>
          </Row>
          <Row padded>
            <Col>
              <Button onClick={this.toggleRegisterModal}>Participar</Button>
            </Col>
          </Row>
        </FAQSection>
        <WinnersSection>
          <Row>
            <Col>
              <H1>Ganhadores</H1>
              <h2>Confira quem já ganhou nosso sorteio</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src="/ganhador-1.png" alt="Ganhador 1" />
              <b>João Freitas</b>
              <p>1 kit Nanosynt</p>
            </Col>
            <Col>
              <img src="/ganhador-2.png" alt="Ganhador 2" />
              <b>Nicole Almeida</b>
              <p>1 kit Vitra</p>
            </Col>
            <Col>
              <img src="/ganhador-3.png" alt="Ganhador 3" />
              <b>Jaqueline Soares</b>
              <p>1 kit Opus</p>
            </Col>
          </Row>
        </WinnersSection>
        <RulesSection id="regulamento">
          <Row>
            <Col>
              <H1 color={theme.darkBlue}>Regulamento</H1>
              <p>
                Clique no botão abaixo para fazer o download do regulamento da
                promoção
              </p>
              <a href="/files/regulamento.pdf" target="_blank">
                <Button>BAIXAR REGULAMENTO</Button>
              </a>
            </Col>
          </Row>
        </RulesSection>
        <Footer>
          <p>
            Política de Privacidade ©2020 FGM. Todos os direitos reservados.{" "}
            <br />
            CERTIFICADO DE AUTORIZAÇÃO SECAP/MF N. ° 06.007002/2019
          </p>
        </Footer>
        <RegisterModal
          isModalOpened={this.state.isRegisterModalOpened}
          closeModal={this.toggleRegisterModal}
        />
        <LoginModal
          isModalOpened={this.state.isLoginModalOpened}
          closeModal={this.toggleLoginModal}
        />
      </div>
    );
  }
}

export default Landing;
