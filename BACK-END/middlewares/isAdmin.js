const isAdmin = (req, res) => {
  try {
    if (role !== "admin") return res.status(401).send("Access denied");
    return next();
  } catch (error) {
    return res.status(403).send("Access denied");
  }
};

module.exports = isAdmin;
