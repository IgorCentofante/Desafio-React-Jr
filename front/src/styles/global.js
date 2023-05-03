import {createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Comme', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    z-index: 0;
  }

  button:hover{
  background: rgb(44, 115, 210);
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Header = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #ffffff;
  background-color: rgb(44, 115, 210);
`;

export const Title = styled.h1`
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const BotaoNovo = styled.button`
  width: 12vw;
  padding: 16px 0px;
  margin: 8vh 0 2vh 8vw;
  align-items: center;
  border: none;
  border-radius: 8px;
  outline: none;
  color: #fff;
  font-size: 1.1rem;
  background: rgb(44, 115, 210);
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px #00000056;
  @media only screen and (max-width: 600px) {
    width: 28vw;
    height: 7vh;
    font-size: 0.9rem;
    margin: 7vh 0 0 20px;
    justify-content: center;  
}
`;

export default Global;