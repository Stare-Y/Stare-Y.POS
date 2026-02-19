import { Request, Response } from "express";
import { processPayment } from "../services/payment.service";

export const requestPayment = (req: Request, res: Response) => {
  const result = processPayment(req.body);
  res.status(201).json(result);
};

export const handlePaymentNotification = (req: Request, res: Response) => {
  // handle webhook logic here
  res.status(200).json({ status: "received" });
};
