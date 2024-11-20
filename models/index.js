import Book from "./book.js";
import User from "./user.js";
import Loan from "./loan.js";

User.hasMany(Loan, { foreignKey: "userId", as: "loans" });
Loan.belongsTo(User, { foreignKey: "userId", as: "user" });

Book.hasMany(Loan, { foreignKey: "bookId", as: "loans" });
Loan.belongsTo(Book, { foreignKey: "bookId", as: "book" });

export { Book, User, Loan };

export default {
  Book,
  User,
  Loan,
};
