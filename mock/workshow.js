const Mock = require("mockjs");
const Random = Mock.Random;
let worklist = [];
for (let i = 0; i < 10000; i++) {
  worklist.push(
    Mock.mock({
      id: i,
      data: Random.date("yyyy-MM-dd") + " " + Random.time("HH:mm:ss"),
      title: Mock.mock("@string(8)"),
      img: Random.image("238x297", "#FF6503", "@~@"),
      author: Mock.mock("@string(5)"),
      subtitle: Random.sentence(1),
      headimg: Random.image("50x50", "#F900a3", "头像"),
      content:Mock.mock("@string(15)"),
    })
  );
}
module.exports = {
  [`POST /api/workshow`](req, res) {
    const { number, pageNumber } = req.body;
    if (number && pageNumber) {
      const workdata = worklist.slice(
        (pageNumber - 1) * number,
        pageNumber * number
      );
      res
        .status(200)
        .json({ success: true, message: "Ok", code: 200, data: workdata });
    } else {
      res.status(200).json({ success: false, message: "err", code: 401 });
    }
  }
};
