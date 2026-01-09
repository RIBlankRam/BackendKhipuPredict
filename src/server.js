import app from "./app.js";
import graphRoutes from "./routes/graphRoutes.js";

const PORT = process.env.PORT || 3000;

app.use("/api/graph", graphRoutes);

app.listen(PORT, () => {
  console.log(`API ejecutándose en el puerto ${PORT}`);
});
