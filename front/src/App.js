import { useEffect, useState } from "react";
import Modal from 'react-modal';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Grid from "./components/grid";
import Form from './components/form.js';
import GlobalStyle from "./styles/global";
import { Header, Title, Container, BotaoNovo} from './styles/global';
import ModalStyle from './styles/modal';
import 'aos/dist/aos.css';

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

  return (
    <>
      <Header>
        <Title>Desafio React Junior</Title>
      </Header>
      <Container>
        <BotaoNovo onClick={openModal}>Novo Produto</BotaoNovo>
      </Container>
      
      <Container>
        <Grid users={users} setUsers={setUsers} getUsers={getUsers} setOnEdit={setOnEdit} openModal={openModal} />
      </Container>

      <Container>
        <Modal  isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" overlayClassName="modal-overlay" className="modal-content"> 
          <Form getUsers={getUsers} onEdit={onEdit} setOnEdit={setOnEdit} closeModal={closeModal}/>      
        </Modal>
      </Container>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
      <ModalStyle />
    </>
  );
}

export default App;
