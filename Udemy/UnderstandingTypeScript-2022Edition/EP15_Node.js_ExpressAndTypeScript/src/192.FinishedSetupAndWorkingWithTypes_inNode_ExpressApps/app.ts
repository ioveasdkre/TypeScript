import express from "express";

// const express = require("express"); // 這是 js寫法 故 ts中的變數型別不會變成 express (編譯時)

const app = express();

app.listen(3000);
