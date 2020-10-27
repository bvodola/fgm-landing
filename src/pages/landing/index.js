import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import { Helmet } from "react-helmet";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Button, H1 } from "../../components/index";
import { Row, Col } from "../../components/Grid";
import RegisterModal from "./_components/RegisterModal";
import LoginModal from "./_components/LoginModal";
import theme from "../../theme";
import { handleCloudinaryUpload } from "../../helpers";
import { navigate } from "gatsby";
import config from "../../config";

const RESULTS = [
  {
    date: "08/08/2020",
    winners: [
      {
        name: "Cláudio Henrique Sales Ximenes Ávila",
        prize: "Voucher Submarino R$ 200",
        company: "Dental São Sebastião",
      },
      {
        name: "Rodrigo Gomes Mafra",
        prize: "Voucher Submarino R$ 200",
        company: "Dental Cremer",
      },
      {
        name: "Rafael Altarugio Godoy",
        prize: "Voucher Submarino R$ 200",
        company: "FGM Implantes",
      },
      {
        name: "Cesta de Produtos R$ 4.000",
        prize: "Fernanda Angeloni de Souza",
        company: "FGM Implantes",
      },
      {
        name: "Cesta de Produtos R$ 4.000",
        prize: "Abigail Borges Prado",
        company: "Gutierre",
      },
      {
        name: "Julia Gabiroboertz Cardoso",
        prize: "Cesta de Produtos R$ 4.000",
        company: "Coelho Dental L&M de Pilares",
      },
      {
        name: "Cassius Paranhos Couri",
        prize: "Cesta de Produtos R$ 5.000",
        company: "FGM Implantes",
      },
      {
        name: "Mateus Souza Ribeiro",
        prize: "Cesta de Produtos R$ 5.000",
        company: "FGM Implantes",
      },
      {
        name: "Carlos Fernando Sousa de Carvalho",
        prize: "Cesta de Produtos R$ 5.000",
        company: "Dental Cremer",
      },
    ],
  },

  {
    date: "08/09/2020",
    winners: [
      {
        name: "Angelo Marcelo Tirado dos Santos",
        prize: "Voucher Submarino R$ 300",
        company: "FGM Implantes",
      },
      {
        name: "Teresa Bennemann",
        prize: "Voucher Submarino R$ 300",
        company: "Dental Shop",
      },
      {
        name: "Maria de Fátima Lemos Duarte",
        prize: "Voucher Submarino R$ 300",
        company: "Dental Cremer",
      },
      {
        name: "Marcus Vinicius Rocha Martins",
        prize: "Cesta de Produtos R$ 4.000",
        company: "FGM Implantes",
      },
      {
        name: "Nilo Segheto Júnior",
        prize: "Cesta de Produtos R$ 4.000",
        company: "Dental Odonto Cirúrgica",
      },
      {
        name: "Daiana Melo Pomponet Viana",
        prize: "Cesta de Produtos R$ 4.000",
        company: "Dental Cremer",
      },
      {
        name: "Daniel Salles",
        prize: "Cesta de Produtos R$ 5.000",
        company: "Gutierre",
      },
      {
        name: "Raul Muxfeldt",
        prize: "Cesta de Produtos R$ 5.000",
        company: "Dental Speed",
      },
      {
        name: "Roberto Ventura Dallacqua",
        prize: "Cesta de Produtos R$ 5.000",
        company: "FGM Implantes",
      },
    ],
  },

  {
    date: "08/10/2020",
    winners: [
      {
        name: "Caroline Antunes Jacon	",
        prize: "Voucher Submarino R$ 300",
        company: "Dental Curitibana",
      },
      {
        name: "Aline do Carmo França Botelho",
        prize: "Voucher Submarino R$ 300",
        company: "Dental Cremer",
      },
      {
        name: "Franceanne Dambros Flach",
        prize: "Voucher Submarino R$ 300",
        company: "Dental Med Sul",
      },
      {
        name: "Renato de Melo Cassini",
        prize: "Voucher Submarino R$ 300",
        company: "Dental Med Sul",
      },
      {
        name: "Andre Rodrigo Santos Mendes",
        prize: "Cesta de Produtos R$ 4.000",
        company: "FGM Implantes",
      },
      {
        name: "Ana Tânia Miranda da Silva",
        prize: "Cesta de Produtos R$ 4.000",
        company: "Dental Cremer",
      },
      {
        name: "Ângelo Zaccariotto Neto",
        prize: "Cesta de Produtos R$ 4.000",
        company: "Gutierre",
      },
      {
        name: "Teresa Bennemann",
        prize: "Cesta de Produtos R$ 4.000",
        company: "Dental Shop",
      },
      {
        name: "Daniel Tamashiro Higa",
        prize: "Cesta de Produtos R$ 5.000",
        company: "FGM Implantes",
      },
      {
        name: "Cláudio Henrique Sales Ximenes Ávila",
        prize: "Cesta de Produtos R$ 5.000",
        company: "Dental São Sebastião",
      },
    ],
  },
];

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

const WinnersList = styled.ul`
  width: 100%;
  margin-top: -20px;
  margin-bottom: 32px;
  li {
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;

    span:first-child {
      font-weight: bold;
    }

    span:nth-child(3) {
      font-style: italic;
    }
  }

  li:last-child {
    border: 0;
  }
`;

const ADD_USER_MUTATION = (user) => `
mutation {
  addUser(user: {
    name: "${user.name}"
    email: "${user.email}"
    phone: "${user.phone}"
    password: "${user.password}"
    role: "CLIENT"

    cro: "${user.cro}"
    cpf: "${user.cpf}"
    rg_cnpj: "${user.rg_cnpj}"

    receipts: [${user.receipts.map(
      (receipt) => `
      {
        dental_name: "${receipt.dental_name}"
        code: "${receipt.code}"
        amount: "${receipt.amount}"
        files: ["${receipt.files[0] ? receipt.files[0].src : ""}"]
      }
    `
    )}]
  }) {
    _id
  }
}`;

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      isRegisterModalOpened: false,
      isLoginModalOpened: false,
      form: {
        receipts: [
          {
            dental_name: "",
            code: "",
            amount: "",
            files: [],
          },
        ],
      },
    };
    this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.addReceipt = this.addReceipt.bind(this);
    this.removeReceipt = this.removeReceipt.bind(this);
    this.handleRemoveUploadedFile = this.handleRemoveUploadedFile.bind(this);
    this.handleFileUploaderChange = this.handleFileUploaderChange.bind(this);
    this.handleSubmitRegisterModal = this.handleSubmitRegisterModal.bind(this);
  }

  addReceipt() {
    const { form } = this.state;
    form.receipts.push({
      dental_name: "",
      code: "",
      amount: "",
      files: [],
    });
    this.setState({ form });
  }

  removeReceipt(i) {
    const { form } = this.state;
    form.receipts.splice(i, 1);
    this.setState({ form });
  }

  toggleRegisterModal(ev) {
    ev.preventDefault();
    this.setState({ isRegisterModalOpened: !this.state.isRegisterModalOpened });
  }

  toggleLoginModal(ev) {
    ev.preventDefault();
    this.setState({ isLoginModalOpened: !this.state.isLoginModalOpened });
  }

  handleFileUploaderChange(ev, receiptIndex) {
    const targetFiles = ev.target.files;
    console.log(targetFiles);
    const fileURLs = Array.from(targetFiles).map((f) => ({
      _id: Math.random()
        .toString(36)
        .substring(7),
      src: URL.createObjectURL(f),
      file: f,
    }));

    console.log(receiptIndex, fileURLs);

    if (
      typeof fileURLs[0] !== "undefined" &&
      fileURLs[0].file.size >= 10485760
    ) {
      alert("O arquivo da nota deve ter no máximo 10MB");
    } else {
      let { form } = this.state;
      form.receipts[receiptIndex].files = fileURLs;
      this.setState({ form });
      ev.target.value = null;
    }
  }

  handleRemoveUploadedFile(_id, receiptIndex) {
    console.log(receiptIndex, _id);
    let { form } = this.state;
    let files = form.receipts[receiptIndex].files;
    form.receipts[receiptIndex].files = files.filter((f) => f._id !== _id);
    this.setState({ form });
  }

  async handleSubmitRegisterModal(ev) {
    try {
      ev.preventDefault();
      this.setState({ loading: true });
      const { form } = this.state;

      // Check receipt files
      let ARE_FILES_VALIDATED = true;
      form.receipts.forEach((receipt, i) => {
        if (receipt.files.length === 0) {
          alert(`Por favor, anexe os arquivos de todas as suas notas fiscais.`);
          ARE_FILES_VALIDATED = false;
          this.setState({ loading: false });
          return;
        }
      });

      if (!ARE_FILES_VALIDATED) return;

      const newReceipts = await Promise.all(
        form.receipts.map(async (receipt) => {
          const files = await Promise.all(
            receipt.files.map(async (file) => {
              const res = await handleCloudinaryUpload(file.file);
              console.log(res);
              return {
                ...file,
                src: typeof res !== "undefined" ? res.data.url : "",
              };
            })
          );
          return {
            ...receipt,
            files,
          };
        })
      );

      form.receipts = newReceipts;
      const res = await axios.post(`${config.BACKEND_URL}/graphql`, {
        query: ADD_USER_MUTATION(form),
      });
      console.log(res);
      navigate("/thanks");
      this.setState({ loading: false, form });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <link href="/fonts/gotham/stylesheet.css" rel="stylesheet" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon.png"
            sizes="512x512"
          />
          <title>Promoção FGM Dá Sorte</title>
        </Helmet>
        <GlobalStyle />
        <Nav>
          <div className="logo">
            <img src="/img/fgm-dental-group.png" alt="Logo FGM" />
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
              {/* <a href="#" onClick={this.toggleLoginModal}>
                Login
              </a> */}
              <a href={`${config.SYSTEM_URL}/`}>Login</a>
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
                Para participar é fácil. Compre produtos FGM através de seus
                consultores ou por meio de seus distribuidores oficiais,
                preencha o cadastro no site e cadastre a nota fiscal dos
                produtos. Lembre-se: é importante guardar sua nota fiscal, caso
                seja sorteado, será solicitado para conferência dos dados.
              </p>
              <h3>Qual período de validade da promoção?</h3>
              <p>
                A promoção é válida para as compras de produtos FGM através de
                seus consultores ou por meio de seus distribuidores oficiais no
                período de 29/01/2020 a 25/10/2020.
              </p>
            </Col>

            <Col>
              <h3>Qual valor em produtos preciso comprar?</h3>
              <p>
                A cada R$120,00 em produtos de estética você gera 01 (um) número
                da sorte e a cada R$200,00 em produtos de implante você gera 01
                (um) número da sorte. Todos os meses serão sorteados mais de 70
                prêmios entre vale-presentes e kits FGM. Com 05 (cinco) números
                da sorte você concorre ao prêmio final.
              </p>
              <h3>Como faço para recuperar meu cadastro?</h3>
              <p>
                Basta clicar em Login (no topo desta página) e então clicar em
                Recuperar Senha. As instruções de recuperação de senha serão
                enviadas para o e-mail que você cadastrou.
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
              <h2>Confira abaixo a lista de sorteados</h2>
            </Col>
          </Row>
          {/* ******* */}
          {/* Sorteio */}
          {/* ******* */}
          <Row>
            <Col>
              <h2>
                <b>Sorteio realizado 06/03/2020</b>
              </h2>
              <WinnersList>
                <li>
                  <span>
                    Leonora Cristina da Silva Parente Macedo: Voucher Submarino
                    R$ 100
                  </span>
                  <br />
                  <span>Onde comprou: FGM implantes</span>
                </li>
                <li>
                  <span>
                    Kamila Nery Grossi Tavares (LIBERTAS ASSISTENCIA
                    ODONTOLOGICA LTDA): Voucher Submarino R$ 100
                  </span>
                  <br />
                  <span>Onde comprou: Dental Cremer</span>
                </li>

                <li>
                  <span>
                    Danielle Sanches Gonçalves ( ODONTO FABBRI SOCIEDADE SIMPLES
                    PUR): Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: FGM implantes</span>
                </li>

                <li>
                  <span>
                    Anisio de Souza Filho (ODONTO FABBRI SOCIEDADE SIMPLES PUR):
                    Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: FGM implantes</span>
                </li>

                <li>
                  <span>
                    Alceu Pirochetti Junior: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: Gutierre</span>
                </li>

                <li>
                  <span>
                    Fabricio Reskalla Amaral: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Speed</span>
                </li>

                <li>
                  <span>
                    Analice Paulo Rangel Ferreira: Cesta de Produtos R$ 5.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Speed</span>
                </li>
              </WinnersList>
            </Col>
          </Row>
          {/* ******* */}
          {/* Sorteio */}
          {/* ******* */}
          <Row>
            <Col>
              <h2>
                <b>Sorteio realizado 17/04/2020</b>
              </h2>
              <WinnersList>
                <li>
                  <span>
                    Kamila Nery Grossi Tavares: Voucher Submarino R$ 100
                  </span>
                  <br />
                  <span>Onde comprou: Dental Cremer</span>
                </li>
                <li>
                  <span>Alceu Pirochetti Júnior: Voucher Submarino R$ 100</span>
                  <br />
                  <span>Onde comprou: FGM implantes</span>
                </li>

                <li>
                  <span>Fabioneide Cândido: Cesta de Produtos R$ 4000</span>
                  <br />
                  <span>Onde comprou: Ice Comércio de Produtos</span>
                </li>

                <li>
                  <span>Anisio de Souza Filho: Cesta de Produtos R$ 4.000</span>
                  <br />
                  <span>Onde comprou: FGM implantes</span>
                </li>

                <li>
                  <span>
                    Fernanda Angeloni de Souza: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: FGM Implantes</span>
                </li>

                <li>
                  <span>
                    Lorena Poltronieri Rangel: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: Gutierre</span>
                </li>

                <li>
                  <span>
                    Daiana Melo Pomponet Viana: Cesta de Produtos R$ 5.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Cremer</span>
                </li>

                <li>
                  <span>
                    Carlos Fernando Sousa de Carvalho: Cesta de Produtos R$
                    5.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Cremer</span>
                </li>

                <li>
                  <span>Giovani de Bona: Cesta de Produtos R$ 5.000</span>
                  <br />
                  <span>Onde comprou: FGM Implantes</span>
                </li>
              </WinnersList>
            </Col>
          </Row>
          {/* ******* */}
          {/* Sorteio */}
          {/* ******* */}
          <Row>
            <Col>
              <h2>
                <b>Sorteio realizado 11/05/2020</b>
              </h2>
              <WinnersList>
                <li>
                  <span>Giovani de Bona: Voucher Submarino R$ 100</span>
                  <br />
                  <span>Onde comprou: FGM Implantes</span>
                </li>
                <li>
                  <span>Rogério Alves Toscano: Voucher Submarino R$ 100</span>
                  <br />
                  <span>Onde comprou: Dental Speed</span>
                </li>

                <li>
                  <span>
                    Ângelo Zaccaariotto Neto: Voucher Submarino R$ 100
                  </span>
                  <br />
                  <span>Onde comprou: Gutierre</span>
                </li>

                <li>
                  <span>Mateus Souza Ribeiro: Cesta de Produtos R$ 4.000</span>
                  <br />
                  <span>Onde comprou: FGM implantes</span>
                </li>

                <li>
                  <span>
                    Murilo Afonso Rorbacker: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: FGM Implantes</span>
                </li>

                <li>
                  <span>
                    Hericka Torres Urban Caldas: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: Gutierre</span>
                </li>

                <li>
                  <span>
                    Daniella Sanches Gonçalves: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Cremer</span>
                </li>

                <li>
                  <span>Rodrigo Gomes Mafra: Cesta de Produtos R$ 5.000</span>
                  <br />
                  <span>Onde comprou: Dental Cremer</span>
                </li>

                <li>
                  <span>Renata Horigome: Cesta de Produtos R$ 5.000</span>
                  <br />
                  <span>Onde comprou: Dental Cremer</span>
                </li>
              </WinnersList>
            </Col>
          </Row>
          {/* ******* */}
          {/* Sorteio */}
          {/* ******* */}
          <Row>
            <Col>
              <h2>
                <b>Sorteio realizado 05/06/2020</b>
              </h2>
              <WinnersList>
                <li>
                  <span>Caroline Antunes Jacon: Voucher Submarino R$ 200</span>
                  <br />
                  <span>Onde comprou: Dental Curitiba</span>
                </li>
                <li>
                  <span>Rogério Alves Toscano: Voucher Submarino R$ 200</span>
                  <br />
                  <span>Onde comprou: Dental Speed</span>
                </li>

                <li>
                  <span>Igor Mey: Cesta de Produtos R$ 4.000</span>
                  <br />
                  <span>Onde comprou: Dental Plus</span>
                </li>

                <li>
                  <span>
                    Analice Paulo Rangel Ferreira: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Speed</span>
                </li>

                <li>
                  <span>
                    Márcio Augusto Bonat Cordeiro: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Speed</span>
                </li>

                <li>
                  <span>
                    Andreza Cristina Sgrott Bet: Cesta de Produtos R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: FGM Implantes</span>
                </li>

                <li>
                  <span>
                    Valquiria Bueno de Moraes Silva: Cesta de Produtos R$ 5.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Med Sul</span>
                </li>

                <li>
                  <span>
                    Fabricio Reskalla Amaral: Cesta de Produtos R$ 5.000
                  </span>
                  <br />
                  <span>Onde comprou: FGM Implantes</span>
                </li>

                <li>
                  <span>
                    Marcus Vinicius Rocha Martins: Cesta de Produtos R$ 5.000
                  </span>
                  <br />
                  <span>Onde comprou: FGM Implantes</span>
                </li>
              </WinnersList>
            </Col>
          </Row>
          {/* ******* */}
          {/* Sorteio */}
          {/* ******* */}
          <Row>
            <Col>
              <h2>
                <b>Sorteio realizado 07/07/2020</b>
              </h2>
              <WinnersList>
                <li>
                  <span>Renata Horigome: Voucher Submarino R$ 200</span>
                  <br />
                  <span>Onde comprou: Dental Cremer</span>
                </li>
                <li>
                  <span>Raul Muxfeldt: Voucher Submarino R$ 200</span>
                  <br />
                  <span>Onde comprou: Dental Speed</span>
                </li>

                <li>
                  <span>
                    Eduarda Tenenberg Pinheiro da Nóbrega: Cesta de Produtos R$
                    4.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Speed</span>
                </li>

                <li>
                  <span>
                    José Humberto Golçalves da Silva Júnior: Cesta de Produtos
                    R$ 4.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Alagoas</span>
                </li>

                <li>
                  <span>
                    Bráulio Aparecido Ferreira da Cunha: Cesta de Produtos R$
                    4.000
                  </span>
                  <br />
                  <span>Onde comprou: FGM Implantes</span>
                </li>

                <li>
                  <span>Naila Gabani: Cesta de Produtos R$ 4.000</span>
                  <br />
                  <span>Onde comprou: Gutierre</span>
                </li>

                <li>
                  <span>Dalva Soares Lauton: Cesta de Produtos R$ 5.000</span>
                  <br />
                  <span>Onde comprou: FGM Implantes</span>
                </li>

                <li>
                  <span>
                    Teresa Cristina Bennemann de Souza: Cesta de Produtos R$
                    5.000
                  </span>
                  <br />
                  <span>Onde comprou: Dental Shop</span>
                </li>
              </WinnersList>
            </Col>
          </Row>

          {/* ******* */}
          {/* Sorteio */}
          {/* ******* */}
          {RESULTS.map((result) => (
            <Row>
              <Col>
                <h2>
                  <b>Sorteio realizado {result.date}</b>
                </h2>

                <WinnersList>
                  {result.winners.map((winner) => (
                    <li>
                      <span>
                        {winner.name}: {winner.prize}
                      </span>
                      <br />
                      <span>Onde comprou: {winner.company}</span>
                    </li>
                  ))}
                </WinnersList>
              </Col>
            </Row>
          ))}

          {/* *************** */}
          {/* Proximo Sorteio */}
          {/* *************** */}
          <Row>
            <Col>
              <h2>
                <b>Próximo sorteio: 08/09/2020</b>
              </h2>
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
          scope={this}
          isModalOpened={this.state.isRegisterModalOpened}
          closeModal={this.toggleRegisterModal}
          form={this.state.form}
          addReceipt={this.addReceipt}
          removeReceipt={this.removeReceipt}
          handleFileUploaderChange={this.handleFileUploaderChange}
          handleRemoveUploadedFile={this.handleRemoveUploadedFile}
          handleSubmit={this.handleSubmitRegisterModal}
          loading={this.state.loading}
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
