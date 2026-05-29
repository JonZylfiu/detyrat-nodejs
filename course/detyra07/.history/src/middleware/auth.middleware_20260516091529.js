/**
 * Authentication: "Who is this request?"
 * We verify the token signature and expiry, then attach req.user for later steps.
 */
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/jwt");

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Missing token (send Authorization: Bearer <jwt>)" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = {
      id: payload.sub,
      role: payload.role,
    };
    next();
  } catch {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}

module.exports = { authenticateToken };
