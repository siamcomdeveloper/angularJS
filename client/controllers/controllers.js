myApp.controller('blogController', function($route,$scope,$http,$routeParams){
	$scope.getBlogs = function(){
		$http.get('../api/select.php').then(function(response){
			$scope.blogs = response.data;
		});
	};
	$scope.addBlog = function(info){
		$http.post('../api/insert.php', info).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.showBlog = function(){
		var id = $routeParams.id;
		$http.post('../api/selectone.php',{'id':id}).then(function(response){
			var blog  = response.data;
			$scope.blog = blog[0];
		});
	};
	$scope.updateBlog = function(info){
		$http.post('../api/update.php', info).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.deleteBlog = function(id){
		var id = id;
		$http.post('../api/delete.php',{'id':id}).then(function(response){
			$route.reload();
		});
	};

});
