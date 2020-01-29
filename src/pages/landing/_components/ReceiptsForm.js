import React from "react";
import { Input, Label, FileUploader } from "../../../components/index";
import { setFormField } from "../../../helpers/index";
import theme from "../../../theme";

import styled from "styled-components";

const Sign = styled.span`
  background: #fff;
  color: rgb(0, 46, 159);
  padding: 0px 7px;
  border-radius: 100%;
  display: inline-flex;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

const AddReceiptRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 20px;
  cursor: pointer;
  font-weight: bold;
`;

const ReceiptBox = styled.div`
  border: 1px solid ${theme.darkYellow};
  border-radius: 20px;
  padding: 10px 30px 30px 30px;
  margin-top: 30px;
`;

const ReceiptBoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  label {
    margin-top: 0;
  }
  b {
    cursor: pointer;
  }
`;

const ReceiptsForm = ({
  receipts,
  addReceipt,
  removeReceipt,
  handleFileUploaderChange,
  handleRemoveUploadedFile,
  scope
}) => (
  <div>
    <Label>Notas Fiscais</Label>
    {receipts.map((receipt, i) => (
      <ReceiptBox key={i}>
        <ReceiptBoxHeader>
          <Label>Nota #{i + 1}</Label>
          <b onClick={() => removeReceipt(i)}>EXCLUIR</b>
        </ReceiptBoxHeader>

        <Label>Dental que realizou a compra</Label>
        <Input
          required
          {...setFormField(scope, `receipts.${i}.dental_name`)}
          type="string"
        />

        <Label>Número da nota fiscal</Label>
        <Input
          required
          {...setFormField(scope, `receipts.${i}.code`)}
          type="string"
        />

        <Label>Valor em produtos FGM</Label>
        <Input
          required
          {...setFormField(scope, `receipts.${i}.amount`)}
          type="string"
        />

        <Label>Arquivo da nota fiscal</Label>
        <FileUploader
          required
          placeholder={<div>Escolher arquivo</div>}
          files={receipt.files}
          formats={".jpg,.jpeg,.pdf"}
          onChange={ev => handleFileUploaderChange(ev, i)}
          close={file_id => handleRemoveUploadedFile(file_id, i)}
        />
      </ReceiptBox>
    ))}
    <AddReceiptRow onClick={addReceipt}>
      <Sign>+</Sign>Adicionar uma Nota Fiscal
    </AddReceiptRow>
  </div>
);

export default ReceiptsForm;

ReceiptsForm.defaultProps = {
  receipts: [],
  addReceipt: () => {},
  removeReceipt: () => {}
};
