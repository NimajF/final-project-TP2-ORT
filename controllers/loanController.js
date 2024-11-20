import Loan from "../models/loan.js";

export const getLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll();
    res.json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLoanById = async (req, res) => {
  try {
    const loan = await Loan.findByPk(req.params.id);
    if (loan) {
      res.json(loan);
    } else {
      res.status(404).json({ message: "Loan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLoan = async (req, res) => {
  const { userId, bookId, loanDate } = req.body;

  try {
    const loan = await Loan.create({
      userId,
      bookId,
      loanDate,
    });

    res.status(201).json(loan);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const updateLoan = async (req, res) => {
  try {
    const [updated] = await Loan.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedLoan = await Loan.findByPk(req.params.id);
      res.json(updatedLoan);
    } else {
      res.status(404).json({ message: "Loan not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteLoan = async (req, res) => {
  try {
    const deleted = await Loan.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Loan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
