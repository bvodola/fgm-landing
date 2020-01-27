import React from "react";
import Modal from "../Modal";
import styled from "styled-components";
import theme from "../../theme";

const ModalContent = styled.div`
  padding: 60px;
  padding-top: 36px;
  @media (max-width: 900px) {
    padding: 24px;
  }
  p {
    font-weight: 700;
    text-align: center;
    margin-bottom: 48px;
  }
  label {
    margin-top: 20px;
    display: flex;
  }

  h1 {
    @media (max-width: 900px) {
      font-size: 24px;
    }
  }

  button {
    background-color: transparent;
    border: 1px solid ${theme.darkYellow};
    width: 100%;
    color: ${theme.darkYellow};
    font-size: 24px;
  }
  .close-button {
    color: white;
    display: block;
    margin-bottom: 10px;
    :hover {
      color: ${theme.darkYellow};
    }
  }
`;

const BlueModal = ({ children, ...props }) => (
  <Modal
    width={"50%"}
    style={{ backgroundColor: theme.darkBlue, color: "white" }}
    {...props}
  >
    <ModalContent>
      <a href="#" className="close-button" onClick={props.closeModal}>
        FECHAR
      </a>
      {children}
    </ModalContent>
  </Modal>
);

export default BlueModal;
