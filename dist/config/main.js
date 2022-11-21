"use strict";

var express = require('express');
var path = require('path');
var main = function main(app) {
  app.use(express.json());
  ///app.use(express.urlencoded());
  app.set('views', path.join(__dirname, 'views/'));
  app.set("view engine", "ejs");
  app.set("views", __dirname + "../../views");
  app.set("view options", {
    layout: false
  });
  app.use('/static', express["static"]('public'));
};
module.exports = main;