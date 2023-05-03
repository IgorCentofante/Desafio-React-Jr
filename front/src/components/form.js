import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast} from "react-toastify";
import Modal from 'react-modal';
import { FormContainer, Title, InputArea, Input, Label, Buttons, SubmitButton, CloseButton } from '../styles/form';

const Form = ({ getUsers, onEdit, setOnEdit, closeModal }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.codigo.value = onEdit.codigo;
      user.descricao.value = onEdit.descricao;
      user.preco.value = onEdit.preco;
      user.data_cadastro.value = onEdit.data_cadastro;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.codigo.value ||
      !user.descricao.value ||
      !user.preco.value ||
      !user.data_cadastro.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }
    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          codigo: user.codigo.value,
          descricao: user.descricao.value,
          preco: user.preco.value,
          data_cadastro: user.data_cadastro.value,
        })
        .then(({ data }) => {console.log('then', data); toast.success(data)})
        .catch(({ data }) => {console.log('catch', data); toast.error(data)});
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          codigo: user.codigo.value,
          descricao: user.descricao.value,
          preco: user.preco.value,
          data_cadastro: user.data_cadastro.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    setOnEdit(null);
    getUsers();
    
    user.nome.value = "";
    user.codigo.value = "";
    user.descricao.value = "";
    user.preco.value = "";
    user.data_cadastro.value = ""; 

    setOnEdit(null);
    getUsers();
    closeModal();
  };

Modal.setAppElement('#root');

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <Title>{onEdit ? "Editar item" : "Novo item"}</Title>
      <InputArea>
        <Label htmlFor="nome">Nome:</Label>
        <Input type="text" id="nome" name="nome" />
      </InputArea>
      <InputArea>
        <Label htmlFor="codigo">Código:</Label>
        <Input type="number" id="codigo" name="codigo" />
      </InputArea>
      <InputArea>
        <Label htmlFor="descricao">Descrição:</Label>
        <Input type="text" id="descricao" name="descricao" />
      </InputArea>
      <InputArea>
        <Label htmlFor="preco">Preço:</Label>
        <Input type="text" id="preco" name="preco" />
      </InputArea>
      <InputArea>
        <Label htmlFor="data_cadastro">Data de cadastro:</Label>
        <Input type="date" id="data_cadastro" name="data_cadastro" />
      </InputArea>
      <Buttons>
        <CloseButton onClick={closeModal}>Cancelar</CloseButton>
        <SubmitButton type="submit">{onEdit ? "Editar" : "Salvar"}</SubmitButton>
      </Buttons>
    </FormContainer>
  );
};

export default Form;