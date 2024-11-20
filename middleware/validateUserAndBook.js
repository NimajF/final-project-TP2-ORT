import User from "../models/user.js";
import Book from "../models/book.js";

const validateUserAndBook = async (req, res, next) => {
  const { userId, bookId } = req.body;

  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const book = await Book.findByPk(bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  next();
};

export default validateUserAndBook;
