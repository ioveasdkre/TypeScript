import express, { Request, Response, NextFunction } from "express"; // 第三方套件
import { json } from "body-parser"; // 第三方套件
import todoRoutes from "./routes/todos";

// const express = require("express"); // 這是 js寫法 故 ts中的變數型別不會變成 express (編譯時)

const app = express();

app.use(json());

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message }); // 500 http的處理
});

app.listen(3000); // localhost:3000
