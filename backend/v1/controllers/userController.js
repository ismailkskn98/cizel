const USERS = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Berk" },
  { id: 3, name: "Cem" },
];

function listUsers(req, res) {
  const limit = Number(req.query.limit || USERS.length);
  res.json(USERS.slice(0, limit));
}

module.exports = { listUsers };
