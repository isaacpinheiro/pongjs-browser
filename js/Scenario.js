"use strict";

var Scenario = function(){

  var _id;
  var _ball;
  var _player1;
  var _player2;

  var rand = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
  };

  this.setId = function(id){
    _id = id;
  };

  this.getId = function(){
    return _id;
  };

  this.setBall = function(ball){
    _ball = ball;
  };

  this.getBall = function(){
    return _ball;
  };

  this.setPlayer1 = function(player1){
    _player1 = player1;
  };

  this.getPlayer1 = function(){
    return _player1;
  };

  this.setPlayer2 = function(player2){
    _player2 = player2;
  };

  this.getPlayer2 = function(){
    return _player2;
  };

  this.run = function(b){

    var vertical;
    var horizontal;

    if(rand(0,2) == 1){
      vertical = true;
    }else{
      vertical = false;
    }

    if(rand(0,2) == 1){
      horizontal = true;
    }else{
      horizontal = false;
    }

    var ballMovement = setInterval(function(){

      if(_ball.getY() > 0 && _ball.getY() < 284){

        if(vertical){

          _ball.setY(parseInt(_ball.getY() + 2));
          b.style.marginTop = _ball.getY()+'px';

          if(_ball.getY() >= 224 && ((_ball.getX() + 15) >= _player1.getX() && _ball.getX() <= (_player1.getX() + 69))){
            vertical = !vertical;
          }

        }else{

          _ball.setY(parseInt(_ball.getY() - 2));
          b.style.marginTop = _ball.getY()+'px';

          if (_ball.getY() <= 62 && ((_ball.getX() + 15) >= _player2.getX() && _ball.getX() <= (_player2.getX() + 69))){
            vertical = !vertical;
          }

        }

        if(horizontal){
          _ball.setX(parseInt(_ball.getX() + 2));
          b.style.marginLeft = _ball.getX()+'px';
          if (_ball.getX() == 284) horizontal = !horizontal;
        }else{
          _ball.setX(parseInt(_ball.getX() - 2));
          b.style.marginLeft = _ball.getX()+'px';
          if (_ball.getX() == 0) horizontal = !horizontal;
        }

      }else if(_ball.getY() == 284){
        window.alert('Player 2 win!');
        clearInterval(ballMovement);
      }else if(_ball.getY() == 0){
        window.alert('Player 1 win!');
        clearInterval(ballMovement);
      }

    }, 70);

  };

};

module.exports = Scenario;
