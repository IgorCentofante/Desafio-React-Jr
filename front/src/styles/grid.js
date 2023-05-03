import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  @media only screen and (max-width: 600px) {
    width: 92%;
    font-size: 12px;
    padding: 5px;
  }
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;
  
export const Th = styled.th`
  text-align: center;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    font-size: 15px;
    height: 7vh;
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: 500px) {
    font-size: 12px;
 
    height: 5vh;
    ${(props) => props.onlyWeb && "display: none"}
  }
`;