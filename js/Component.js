"use strict";

var Component = function(){

  var _id;
  var _x;
  var _y;

  this.setId = function(id){
    _id = id;
  };

  this.getId = function(){
    return _id;
  };

  this.setX = function(x){
    _x = x;
  };

  this.getX = function(){
    return _x;
  };

  this.setY = function(y){
    _y = y;
  };

  this.getY = function(){
    return _y;
  };

};

module.exports = Component;
