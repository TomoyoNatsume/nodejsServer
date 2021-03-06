const router=require('koa-router')();
const fs=require('fs');
const path=require('path');
const {login,visitCounter} = require('../controller/user');
const {SuccessModel,ErrorModel}=require('../model/resModel');


router.prefix('/api/user');


router.post('/login',async (ctx,next)=>{
    const {username,password}=ctx.request.body;
    const data=await login(username,password);
    if(data.username){
        ctx.session.username=data.username;
        ctx.session.realname=data.realname;
        ctx.body=new SuccessModel();
        return;
    }
    ctx.body=new ErrorModel('登录失败');
})

router.get('/visitCounter',async (ctx,next)=>{
    console.log('访问加一')
    return await visitCounter(ctx);
})




module.exports=router