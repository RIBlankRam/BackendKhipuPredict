import express from "express";
import cors from "cors";

import khipuRoutes from "./routes/khipuRoutes.js";
import primaryCordRoutes from "./routes/primaryCordRoutes.js";
import cordRoutes from "./routes/cordRoutes.js";
import knotRoutes from "./routes/knotRoutes.js";
import graphRoutes from "./routes/graphRoutes.js";

const app = express();

/* 🔑 CORS — ESTO ES LO CRUCIAL */
app.use(cors({
  origin: "*", // para pruebas (luego se puede restringir)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

/* ✅ TODAS TUS RUTAS */
app.use("/api/khipus", khipuRoutes);
app.use("/api/primary-cords", primaryCordRoutes);
app.use("/api/cords", cordRoutes);
app.use("/api/knots", knotRoutes);
app.use("/api/graph", graphRoutes);

export default app;
