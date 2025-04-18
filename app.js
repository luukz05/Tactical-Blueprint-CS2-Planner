const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da build
app.use(express.static(path.join(__dirname, "build")));

// Qualquer rota deve mandar para o index.html (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
