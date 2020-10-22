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
       if(string === "")
        return "Please enter data first";
       var words=string.split(",");
       console.log(words.length)
        if(words.length>=1&&words.length<=3)
          return "Enjoy";
        else 
          return "Too much";
}
    
});
})();
