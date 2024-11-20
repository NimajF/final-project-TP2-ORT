import express from "express";
import sequelize from "./connection/connection.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";

const app = express();
app.use(express.json());
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/loans", loanRoutes);

sequelize
  .sync({ force: false })
  .then(() => console.log("Database synced successfully with relationships"))
  .catch((err) => console.error("Error syncing database:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
