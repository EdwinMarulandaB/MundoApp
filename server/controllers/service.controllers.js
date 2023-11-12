import { pool } from "../db.js";
import {Servicio} from '../clases/service.js'

const createService = async (req, res) => {
  const data = req.body;
    data.idtrabajador = 3 
  
  const service = new Servicio(data);

  const [result] = await pool.query("INSERT INTO servicio SET ?", service);
  res.json(result);
};

const getServices = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT * FROM servicio ORDER BY nombre ASC"
        );
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
  };
  


export default {
    createService,
    getServices
  };