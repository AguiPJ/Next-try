const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(()=>{
        const server = express();
        server.get('/p/:id', (req, res) => {
            console.log('params', req.params);
            const actualPage = '/post';
            // 实际跳转页面
            const queryParams = { id: req.params.id };
            // 路由参数
            app.render(req, res, actualPage, queryParams)
        });
        server.get('/n/:id', (req, res) => {
            console.log('params', req.params);
            const actualPage = '/news';
            // 实际跳转页面
            const queryParams = { id: req.params.id };
            // 路由参数
            app.render(req, res, actualPage, queryParams)
        });

        server.get('*',(req,res)=>{
            return handle(req,res)
        });

        server.listen(3000, (err)=>{
            if(err) throw err;
            console.log('服务启动： http://localhost:3000')
        })
    })
    .catch((ex)=>{
        console.error(ex.stack);
        process.exit(1);
    });



