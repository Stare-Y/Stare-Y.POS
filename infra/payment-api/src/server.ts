import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Payment API running on port ${PORT}`);
});
