import { pool } from "../db.js";
import { Cliente } from "../clases/cliente.js";



const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM cliente ORDER BY nombre ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM cliente where idcliente = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Cliente not found" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const data = req.body;

  if (
    !data.nombre ||
    !data.apellido ||
    !data.email ||
    !data.password ||
    !data.contacto ||
    !data.fecha_nacimiento
  ) {
    return res.status(400).json({ message: "Todos los campos son requeridos" });
  }
  
  const cliente = new Cliente(data);

  const [result] = await pool.query("INSERT INTO cliente SET ?", cliente);
  res.json(result);
};

const updateUser = async (req, res) => {};

const deleteUser = async (req, res) => {};

export default {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
