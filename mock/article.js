const Mock = require("mockjs");
const Random=Mock.Random
const data = [];
for (let i = 0; i < 100; i++) {
    data.push(Mock.mock({
        'id|1-100':1,
        href: Random.url('http'),
        title: Random.sentence( 1),
        avatar:Random.image('272x168','#FF6600','@~@'),
        description:
        Random.sentence( 3),
        content:
        Random.sentence( 5),
        starnumber: Random.integer( 0,1000 ),
        likenumber: Random.integer( 0,1000 ),
        messagenumber:  Random.integer( 0,1000 ),
        star: Random.boolean(),
        like:Random.boolean(),
        'type|1':['Focus','frontend','behind','java']
    }));
  }
  module.exports = {
    [`POST /api/article`](req, res) {
      const {type,pageNumber,pageSize}=req.body
     let seledata=[]
      let arr=[]
      if(type==='all'){
        seledata = data.slice((pageNumber-1)*pageSize,pageNumber*pageSize)
        res.status(200).json({ success: true, message: "Ok", code: 200,data:seledata ,total:data.length});
      }
     else{
      data.map((item,i)=>{
        if(item.type===type) {
          arr.push(item);
        }
       });
       seledata = arr.slice((pageNumber-1)*pageSize,pageNumber*pageSize)
       res.status(200).json({ success: true, message: "Ok", code: 200,data:seledata,total:arr.length });
     }
    }
  }