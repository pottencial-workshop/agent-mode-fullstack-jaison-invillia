const express = require("express");
const cors = require("cors");
const productsRouter = require("./products/routes");

const app = express();

// CORS liberado para qualquer origem conforme instrução.
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
}));

app.use(express.json());
app.use(productsRouter);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[products-api] Servidor ouvindo na porta ${PORT}`);
});
