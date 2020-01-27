import React from "react";
import BlueModal from "../../../components/BlueModal";
import { Button, H1, Input, Label } from "../../../components/index";
import theme from "../../../theme";

const LoginModal = props => (
  <BlueModal {...props}>
    <H1 color={theme.darkYellow}>Faça seu login</H1>
    <p>Digite seu email e senha abaixo</p>

    <Label>Email</Label>
    <Input type="email" />

    <Label>Senha</Label>
    <Input type="password" />

    <Button>Fazer Login</Button>
  </BlueModal>
);

export default LoginModal;
