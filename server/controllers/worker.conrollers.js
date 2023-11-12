import { pool } from "../db.js";
import { Trabajador } from "../clases/trabajador.js";



const getWorkers = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM trabajador ORDER BY nombre ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getWorker = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM trabajador where idtrabajador = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Trabajador not found" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createWorker = async (req, res) => {
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
  
  const trabajador = new Trabajador(data);

  const [result] = await pool.query("INSERT INTO trabajador SET ?", trabajador);
  res.json(result);
};

const updateWorker = async (req, res) => {};

const deleteWorker = async (req, res) => {};

export default {
  getWorkers,
  getWorker,
  createWorker,
  deleteWorker,
  updateWorker,
};
