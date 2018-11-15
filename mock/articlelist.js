const Mock = require("mockjs");
const Random=Mock.Random
let articlelist=[];
for(let i=0;i<100;i++){
    articlelist.push(Mock.mock({
        head:Random.word()+`${i}`,
        startdata:Random.date('yyyy-MM-dd')+' '+Random.time('HH:mm:ss'),
        data:'<p><span style="font-size:30px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">66666666666666666</span></span></span></span></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">666666666666666666666666666666666666666666666666666666666&#x27;</span></span></span></span></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">gagaaggggggggggggggggggggggggggggggggggggggg</span></span></span></span></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">g</span></span></span></span></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">gg</span></span></span></span></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">g</span></span></span></span></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">g</span></span></span></span></p><p></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">gg</span></span></span></span></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">gg</span></span></span></span></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">ggggggggggggggggggggggggggg</span></span></span></span></p><p></p><p>f<span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">afafafafafafaf</span></span></span></span></p><p></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">faafaf</span></span></span></span></p><p><span style="font-size:16px"><span style="line-height:2"><span style="letter-spacing:2px"><span style="padding-left:28px;padding-right:28px">gggggg</span></span></span></span></p><p></p><div class="media-wrap image-wrap"><img src="http://juhe.fs.cdtown.cn/zhdj/20180830/1808301054521440.gif"/></div><p></p>'
    }))
}
module.exports = {
    [`POST /api/articlelist`](req, res) {
      const { id } = req.body;
      const articledata=articlelist[parseInt(id)]
      if(id!=null)
        res.status(200).json({ success: true, message: "Ok", code: 200,data:articledata });
    },
  };