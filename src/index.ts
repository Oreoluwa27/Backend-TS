import e from "express";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
export { server };
