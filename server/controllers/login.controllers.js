import { pool } from "../db.js";

const validateUsers = async (req, res) => {
  const { email, password } = req.body;
  const [client] = await pool.query("SELECT * FROM cliente where email = ?", [
    email,
  ]);

  if (client.length == 0) {
    const [worker] = await pool.query(
      "SELECT * FROM trabajador where email = ?",
      [email]
    );

    if (worker.length == 0) {
      return res.json({
        value: "El ususario no existe",
      });
    }

    const employe = worker[0];

    if (
      email.toLowerCase() == employe.email.toLowerCase() &&
      password == employe.password
    ) {
      return res.json({ value: true , type: "w"});
    }

    return res.json({
      value: "Datos invalidos",
    });
  }

  const user = client[0];

  if (
    email.toLowerCase() == user.email.toLowerCase() &&
    password == user.password
  ) {
    return res.json({ value: true , type: "c"});
  }

  return res.json({
    value: "Datos invalidos",
  });
};

export default {
  validateUsers,
};
