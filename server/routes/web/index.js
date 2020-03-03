module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  //const Article=require('../../models/Article')
  const Article = mongoose.model('Article')
  const Category = mongoose.model('Category')
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.find().where({
      parent: parent
    }).lean()
    const newsTitle = ["新皮肤爆料丨白蛇再临西子湖畔，只为赴你千年之约！", "新星元部件爆料丨渐变马尾&amp;白金战服！伽罗换装出击~", "体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光", "情人节限定皮肤爆料丨喜鹊筑桥，嫦娥后羿月下相逢", "觉醒之战即将再度开启！鬼谷子全屏大，露娜无限连", "2月25日全服不停机更新公告", "3月3日全服不停机更新公告", "3月2日净化游戏环境声明及处罚公告", "3月2日“演员”惩罚名单", "2月28日体验服停机更新公告", "峡谷女神节 福利大集结", "【稷下修学游】活动公告", "伽罗星元上新 多重福利来袭", "峡谷来相聚 初春有好礼", "创意互动营-云中君皮肤设计大赛投票开启", "赛事体验全面升级，重大改版细节抢先看", "2020年KPL春季赛常规赛赛程公布", "王者荣耀职业联赛（KPL）2020年春季赛开赛时间公告", "《王者荣耀职业联赛（KPL）线上赛规则（暂行）》", "王者荣耀世界冠军杯总决赛落地首都北京"]
    const newsList = newsTitle.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title: title
      }
    })
    await Article.deleteMany({
    })
    await Article.insertMany(newsList)
    res.send(newsList)
  })

  router.get('/news/list', async (req, res) => {
    // const parent =await Category.findOne({
    //     name:'新闻分类'
    // }).populate({
    //     path:'children',
    //     populate:{
    //         path:'newsList',

    //     }
    // }).lean()
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      },
      {
        $addFields: {
          newsList: { $slice: ['$newsList', 5] }
        }
      },
    ])
    const subCats=cats.map(v=>v._id)
    cats.unshift({
      name:'热门',
      newsList: await Article.find().where({
        categories:{$in:subCats}
      }).populate('categories').limit(5).lean()
    })

    cats.map(cat=>{
      cat.newsList.map(news =>{
        news.categoryName= (cat.name=== '热门')
        ? news.categories[0].name : cat.name
      })
    })
    res.send(cats)
  })
  app.use('/web/api', router)
}