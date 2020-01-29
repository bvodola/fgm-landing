import React from "react";
import BlueModal from "../../../components/BlueModal";
import { Button, H1, Input, Label } from "../../../components/index";
import theme from "../../../theme";
import ReceiptsForm from "./ReceiptsForm";
import { setFormField } from "../../../helpers/index";

const RegisterModal = props => (
  <BlueModal {...props}>
    <H1 color={theme.darkYellow}>Faça seu cadastro</H1>
    <p>Complete seus dados abaixo e comece a participar</p>

    <form action="" onSubmit={props.handleSubmit}>
      <Label>Nome Completo</Label>
      <Input {...setFormField(props.scope, "name")} type="text" />

      <Label>CRO</Label>
      <Input {...setFormField(props.scope, "cro")} type="text" />

      <Label>CPF</Label>
      <Input {...setFormField(props.scope, "cpf")} type="text" />

      <Label>RG ou CNPJ (em caso de pessoa jurídica)</Label>
      <Input {...setFormField(props.scope, "rg_cnpj")} type="text" />

      <Label>Telefone</Label>
      <Input {...setFormField(props.scope, "phone")} type="tel" />

      <Label>Email</Label>
      <Input {...setFormField(props.scope, "email")} type="email" />

      <Label>Senha</Label>
      <Input {...setFormField(props.scope, "password")} type="password" />

      <ReceiptsForm receipts={props.form.receipts} {...props} />

      <Button type="submit">Concluir e Pontuar!</Button>
    </form>
  </BlueModal>
);

export default RegisterModal;
