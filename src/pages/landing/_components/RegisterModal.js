import React from "react";
import BlueModal from "../../../components/BlueModal";
import { Button, H1, Input, Label } from "../../../components/index";
import theme from "../../../theme";

const RegisterModal = props => (
  <BlueModal {...props}>
    <H1 color={theme.darkYellow}>Faça seu cadastro</H1>
    <p>Complete seus dados abaixo e comece a participar</p>

    <Label>Nome Completo</Label>
    <Input type="text" />

    <Label>Telefone</Label>
    <Input type="tel" />

    <Label>Email</Label>
    <Input type="email" />

    <Label>Senha</Label>
    <Input type="password" />

    <Button>Cadastrar e participar</Button>
  </BlueModal>
);

export default RegisterModal;
