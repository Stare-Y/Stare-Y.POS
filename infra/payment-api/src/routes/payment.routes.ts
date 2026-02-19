import { Router } from "express";
import {
  requestPayment,
  handlePaymentNotification,
} from "../controllers/payment.controller";

const router = Router();

router.post("/", requestPayment);

router.post("/webhook", handlePaymentNotification);

export default router;
