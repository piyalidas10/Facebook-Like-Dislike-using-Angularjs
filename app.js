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