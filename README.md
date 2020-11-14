# app11_1mongo_base

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2020/11/12 

 update : 2020/11/14

***

node/express( es6 ) + mongoDb ,  CRUD base sample

* 認証、User情報をCookie 保存する。
* bcrypt で、password暗号化
* CSRF 対応
* mongo / User情報で、ログイン認証する。
* CRUD sample ( /tasks )

***
mongoDb : 3.6.3

### npm
* mongodb: 3.6.3
* express : 4.16.1
* ejs : 2.6.2

### npm install

* npm install mongodb --save

* npm install express-session --save
* npm install express-flash --save
* npm install moment --save
* npm install csrf --save
* npm install bcrypt -save

***
### setup
express app1

cd app1

npm install

npm start

***
### npm

npm i @babel/core @babel/node @babel/preset-env --save-dev

***
### more

https://note.com/knaka0209/n/n062a0bf8ca9b

***

