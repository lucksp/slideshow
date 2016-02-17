angular.module('slideShowMaker', []);


angular.module('slideShowMaker')
	.factory('imageFactory', [function() {

			var photoGallery = [
				{	
					photoUrl: 'https://dpbfm6h358sh7.cloudfront.net/images/7562328/316806788.jpg',
					caption: 'Aspen Trees with Golden-Yellow Canopy. Kebbler Pass, Colorado.'
				},
				{	
					photoUrl: 'https://dpbfm6h358sh7.cloudfront.net/images/7562328/315414408.jpg',
					caption: 'Kites flying in the sky on Whidbey Island.  Outside of Seattle, Washington.'
				},
				{
					photoUrl: 'https://dpbfm6h358sh7.cloudfront.net/images/7562328/315414386.jpg',
					caption: 'Absinthe being poured at the Pirate Bar.  French Quarter, New Orleans, LA.'
				},
				{
					photoUrl: 'https://dpbfm6h358sh7.cloudfront.net/images/7562328/315414115.jpg',
					caption: 'A snakecharmer performs his ritual outside of the Pink Palace in Jaipur, India.'
				}

			]
			return {
					photoList: photoGallery,
			}
	}]);	

angular.module('slideShowMaker')
	.controller('photoGallery', ['$scope', 'imageFactory', '$interval', function($scope, imageFactory, $interval) {

			$scope.carouselImg = imageFactory.photoList;

			$scope.activeImg = 0;

				$scope.nextSlide = function() {
				if($scope.activeImg !== $scope.carouselImg.length-1) {
					$scope.activeImg++
					}
				}

			$scope.prevSlide = function() {
				if($scope.activeImg > 0) {
					$scope.activeImg--
				}
			}
$interval(function() {
	$scope.nextSlide()
}, 1500)

	}]);
