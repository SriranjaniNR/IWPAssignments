(function () {
'use strict';

angular.module('Lunch Checker', [])

.controller('LunchCheckerController', function ($scope) {
  LunchCheckController.inject=['$scope'];
  $scope.lm = "";
  $scope.Message=""
  function LunchCheckController($scope){
 $scope.CheckIfTooMuch=function(){
  var Message=Lunch($scope.lm)
  $scope.lunch = Message;;
  };


  function Lunch(lm) {
    const words=lm.split(',');
    var i=words.length();
    if (i<1)
      return "Please enter data first";
    else if(i>=1&&i<=3)
      return "Enjoy";
    else 
      return "Too much";
  }

};


})();
