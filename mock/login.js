const Mock = require("mockjs");
const adminUsers = [
  {
    id: 0,
    username: "admin",
    password: "admin",
    permissions: "admin"
  },
  {
    id: 1,
    username: "guest",
    password: "guest",
    permissions: "guest"
  },
  {
    id: 2,
    username: "吴彦祖",
    password: "123456",
    permissions: "user"
  }
];

module.exports = {
  [`POST /api/login`](req, res) {
    const { username, password } = req.body;
    const user = adminUsers.filter(item => item.username === username);
    if (user.length > 0 && user[0].password === password) {
      const now = new Date();
      now.setDate(now.getDate() + 1);
      res.cookie(
        "token",
        JSON.stringify({ id: user[0].id, deadline: now.getTime() }),
        {
          maxAge: 900000,
          httpOnly: true
        }
      );
      res.status(200).json({ success: true, message: "Ok", code: 200 });
    } else {
      res.status(401).end();
    }
  },
};
