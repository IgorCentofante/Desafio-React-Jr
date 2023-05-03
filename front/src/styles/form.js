import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  width: 30vw;
  margin: 0 auto;
  border-radius: 2%;
  @media only screen and (max-width: 600px) {
    width: 70vw;
  }
`;

export const Title = styled.h1`
   text-align: center;
   @media only screen and (max-width: 600px) {
   font-size: 30px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 25vw;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  @media only screen and (max-width: 600px) {
    width: 60vw;
  }
`;

export const Label = styled.label``;

export const Buttons = styled.div`
  display: flex;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #c2c2c2;
  font-size: 15px;
  color: white;
  width: 14vw;
  height: 6vh;
  margin: 2%;
  transition: all 0.6s;
  @media only screen and (max-width: 600px) {
    width: 35vw;
  }
`;

export const CloseButton = styled(SubmitButton)`
  background-color: #c2c2c2;
`;