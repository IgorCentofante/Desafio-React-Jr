import { db } from '../db.js'; 

export const getUsers = (__, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {

  const q =
    "INSERT INTO usuarios (`nome`, `codigo` , `descricao`, `preco`, `data_cadastro`) VALUES (?)";

/*     console.log(q) */
  const values = [
    req.body.nome,
    req.body.codigo,
    req.body.descricao,
    req.body.preco,
    req.body.data_cadastro,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};


export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `codigo` = ?, `descricao` = ?, `preco` = ?, `data_cadastro` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.codigo,
    req.body.descricao,
    req.body.preco,
    req.body.data_cadastro,
  ];
  

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto deletado com sucesso.");
  });
};