const Mock = require("mockjs");
const Random=Mock.Random
const middle = [];
let rightdata = [];
// for (let i = 0; i < 10000; i++) {
//   middle.push({
//     id: ` ${i}`,
//     href: "",
//     title: `ant design part ${i}`,
//     avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     description:
//       "Ant Design, a design language for background applications, is refined by Ant UED Team.",
//     content:
//       "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
//     starnumber: 123,
//     likenumber: 123,
//     messagenumber: 123,
//     star: false,
//     like: false
//   });
// }
for (let i = 0; i < 10000; i++) {
  middle.push(Mock.mock({
      'id|1-10000':1,
      href: Random.url('http'),
      title: Random.sentence( 1 ),
      avatar:Random.image('272x168','#FF6600','@~@'),
      description:
      Random.sentence( 2),
      content:
      Random.sentence( 3),
      starnumber: Random.integer( 0,1000 ),
      likenumber: Random.integer( 0,1000 ),
      messagenumber:  Random.integer( 0,1000 ),
      star: Random.boolean(),
      like:Random.boolean(),
  }));
}
rightdata = [];
for(let i=0;i<3;i++){
  rightdata.push({
    title: Random.paragraph( 1 ,1),
    description:
    Random.paragraph( 1, 1),
  })
}
const leftdata = Mock.mock({
  img: Random.image('272x168','#FF6600','@~@'),
  'eye|1-10000': 1,
  'heart|1-10000': 1,
  'star|1-10000': 1,
  title: Random.paragraph( 1 ,1),
  description:
  Random.paragraph( 1),
  avatar: Random.image('272x168','#FF6600','666'),
});
module.exports = {
  [`POST /api/index`](req, res) {
    const { numb } = req.body;
    let arr = [];
    if (numb) {
      arr = middle.slice(0, numb);
      res
        .status(200)
        .json({
          success: true,
          message: "Ok",
          code: 200,
          middata: arr,
          total: 10000,
          rightdata: rightdata,
          leftdata: leftdata
        });
    } else {
      res
        .status(200)
        .json({
          success: true,
          message: "Ok",
          code: 200,
          middata: middle,
          total: 10000,
          rightdata: rightdata,
          leftdata: leftdata
        });
    }
  },
  [`POST /api/index/like`](req, res) {
    // const { type,id } = req.body;
    //middle[id][type]=!middle[id][type]
    res.status(200).json({ success: true, message: "Ok", code: 200 });
  }
};
