# Facebook-Like-Dislike-using-Angularjs

When user click on "Like" button, $scope.getlike function sets $scope.dislike property to true and $scope.likes is addding by 1. Then btnclass "btn-primary" is addded in button class. Again when user click on "Like" button, $scope.likes is substracting by 1 because we are getting ($scope.dislike ---- true) from first click.

app.js

    var app = angular.module("likeApp",[]);

    app.controller("mainCtrl",function($scope){
      $scope.dislike = false;
      $scope.btnclass = "";
      
      $scope.getlike=function(){
      
        if($scope.dislike==false){
          $scope.likes += 1;
          $scope.dislike = true;
          $scope.btnclass = "btn-primary";
        }
        else{
          $scope.likes -= 1;	
          $scope.dislike = false;
          $scope.btnclass = "";
        }

      }
    });
    
    
Html code
        
       <button class="btn {{btnclass}}" ng-click="getlike()" ng-init="likes=0;"><i class="fa fa-thumbs-o-up"></i> Like</button>
