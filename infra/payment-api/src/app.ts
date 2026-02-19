import express from "express";
import paymentRoutes from "./routes/payment.routes";
import healthRoutes from "./routes/health.routes";

const app = express();

app.use(express.json());

app.use("/payments", paymentRoutes);
app.use("/health", healthRoutes);

export default app;
