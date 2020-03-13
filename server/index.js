const express =require("express")

const app =express()
app.set('secret','caskdjfkljasd')
app.use(express.json())
app.use(require('cors')())
app.use('/uploads',express.static(__dirname+'/uploads'))//托管静态文件，使文件夹可以通过/upload访问
app.use('/admin',express.static(__dirname+'/public/admin'))
app.use('/web',express.static(__dirname+'/public/web'))

require('./routes/admin')(app)
require('./plugins/db')(app)
require('./routes/web')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000/ App listening on port 3000!');
});