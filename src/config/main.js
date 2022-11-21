const express = require('express');
const path = require('path');

const main = (app) =>{
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.set('views', path.join(__dirname, 'views/'));
    app.set("view engine", "ejs");
    app.set("views", __dirname + "../../views");
    app.set("view options", { layout: false } );

 
 app.use('/static', express.static('public'));

}

module.exports = main;