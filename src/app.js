import express from "express";
import cors from "cors";

/* ===== ROUTES ===== */
import khipuRoutes from "./routes/khipuRoutes.js";
import primaryCordRoutes from "./routes/primaryCordRoutes.js";
import cordRoutes from "./routes/cordRoutes.js";
import knotRoutes from "./routes/knotRoutes.js";
import graphRoutes from "./routes/graphRoutes.js";

const app = express();

/* ===== CORS (SOLUCIÓN AL PROBLEMA REAL) ===== */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://frontend-khipu-predict.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/* ===== MIDDLEWARES ===== */
app.use(express.json());

/* ===== ROUTES (NO SE ELIMINA NADA) ===== */
app.use("/api/khipus", khipuRoutes);
app.use("/api/primary-cords", primaryCordRoutes);
app.use("/api/cords", cordRoutes);
app.use("/api/knots", knotRoutes);
app.use("/api/graph", graphRoutes);

/* ===== HEALTH CHECK ===== */
app.get("/", (req, res) => {
  res.send("Khipu Predict API running");
});

export default app;
