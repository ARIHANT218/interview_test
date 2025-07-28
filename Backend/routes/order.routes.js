import express from "express";
import authUser from "../middlewares/authUser.js";
import {
  getUserOrders,
  placeOrderCOD,
} from "../controller/order.controller.js";

const router = express.Router();
router.post("/cod", authUser, placeOrderCOD);
router.get("/user", authUser, getUserOrders);

export default router;