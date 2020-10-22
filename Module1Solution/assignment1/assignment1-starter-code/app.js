(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', function ($scope){
  $scope.lunchitems="";
  $scope.Message=" ";
  $scope.LunchCheck=function(){
    var sms=check($scope.lunchitems)
    $scope.Message=sms;

};
   function check(string){
      var words=string.split(",");
 
      if(words.length>1&&words.length<=4)
        return "Enjoy";
      else if(words.length<=1)
        return "Please Enter data";
      else 
        return "Too much";
}
    
});
})();
