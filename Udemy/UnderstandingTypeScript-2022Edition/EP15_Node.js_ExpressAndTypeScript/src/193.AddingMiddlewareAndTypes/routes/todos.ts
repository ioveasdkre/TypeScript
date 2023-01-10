// 檔案說明 路由規則設定
import { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../constrollers/todos";

const router = Router();

// js導入方式
// const express = require("express");
// const Router = express.Router;

router.get("/", getTodos); // 讀取

router.post("/", createTodo); // 新增

router.patch("/:id", updateTodo); // 更新

router.delete("/:id", deleteTodo);

export default router;
