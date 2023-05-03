import React, { useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import {Table, Thead, Tbody, Tr, Th, Td } from '../styles/grid';


const Grid = ({ users, setUsers, getUsers, setOnEdit, openModal }) => {

  useEffect(() => {
    axios.get("http://localhost:8800").then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const handleEdit = (item) => {
    openModal(true);
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
      <Table>
        <Thead>
          <Tr>
            <Th>Código</Th>
            <Th>Descrição</Th>
            <Th>Editar</Th>
            <Th>Apagar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((item, i) => (
            <Tr key={i}>
              <Td alignCenter width="14%">{item.codigo}</Td>
              <Td alignCenter width="58%">{item.descricao}</Td>
          
              <Td alignCenter width="4%">
              <FaEdit onClick={() => handleEdit(item)} />
          
              </Td>
              <Td alignCenter width="5%">
                <FaTrash onClick={() => handleDelete(item.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
  );
};

export default Grid;
