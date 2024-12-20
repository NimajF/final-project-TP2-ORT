import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret_key"); 
    req.user = decoded;
    next(); 
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authenticate;
    