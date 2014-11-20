var app=angular.module("App",["ngRoute","ngAnimate","ui.slider","ngMaps","ngSanitize"]).config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider){$routeProvider.when("/map",{templateUrl:"templates/map.html"}).when("/marker",{templateUrl:"templates/marker.html"}).when("/points",{templateUrl:"templates/points.html"}).when("/geopoints",{templateUrl:"templates/geopoints.html"}).when("/geopolygons",{templateUrl:"templates/geopolygons.html"}).when("/polygons",{templateUrl:"templates/polygons.html"}).when("/polylines",{templateUrl:"templates/polylines.html"}).when("/circles",{templateUrl:"templates/circles.html"}).when("/rectangles",{templateUrl:"templates/rectangles.html"}).when("/overlay",{templateUrl:"templates/overlay.html"}).when("/control",{templateUrl:"templates/control.html"}).when("/infowindow",{templateUrl:"templates/infowindow.html"}).when("/documentation",{templateUrl:"templates/documentation.html"}).otherwise({redirectTo:"/"})}]);angular.module("App").controller("circles",["$scope",function($scope){$scope.map={center:[39,-121],options:{zoom:6,streetViewControl:!1,scrollwheel:!1}},$scope.circles={geometries:[{center:[39,-121],radius:1e4},{center:[39,-121],radius:5e4},{center:[39,-121],radius:1e5}],options:function(c,map,i){var opacity=1/(i+1);return{fillOpacity:opacity,fillColor:"#e67e22",strokeColor:"#d35400"}}}}]),angular.module("App").controller("control",["$scope",function($scope){$scope.map={center:[47.5,-122.5],options:{zoom:6,streetViewControl:!1,scrollwheel:!1}},$scope.marker={position:[47.5,-122.5],decimals:4,options:{draggable:!0}}}]),angular.module("App").controller("geopoints",["$scope",function($scope){$scope.map={center:[39,-121],options:{zoom:6,streetViewControl:!1,scrollwheel:!1}},$scope.stations={url:"data/AirNow_Sites_PM2.5.geojson",events:{click:function(e,m){var lat=e.latLng.lat(),lng=e.latLng.lng(),name=m.getProperty("siteName");alert(lat+" "+lng+" "+name)}}}}]),angular.module("App").controller("geopolygons",["$scope",function($scope){$scope.map={center:[40,-100],options:{streetViewControl:!1,scrollwheel:!1},zoom:4},$scope.states={url:"data/states.geojson",options:function(){return{fillColor:"orange",strokeWeight:1,strokeColor:"white"}},events:{mouseover:function(e,p){p.setOptions({strokeWeight:2,zindex:100})},mouseout:function(e,p){p.setOptions({strokeWeight:1,zindex:0})}}}}]),angular.module("App").controller("infowindow",["$scope",function($scope){$scope.map={center:[47.5,-122.5],options:{zoom:6,streetViewControl:!1,scrollwheel:!1},events:{click:function(e){$scope.infowindow.position=e.latLng,$scope.$apply()}}},$scope.infowindow={position:[47.6,-122.5]}}]),angular.module("App").controller("Main",["$scope","$location",function($scope,$location){$scope.location=function(){return $location.path()},$scope.options=["map","marker","points","geopoints","polygons","geopolygons","polylines","circles","rectangles","overlay","control","infowindow"]}]),angular.module("App").controller("map",["$scope",function($scope){$scope.map={center:[39,-121],options:{zoom:4,streetViewControl:!1,scrollwheel:!1}}}]),angular.module("App").controller("marker",["$scope",function($scope){$scope.map={center:[39,-121],options:{zoom:6,streetViewControl:!1,scrollwheel:!1}},$scope.marker={position:[39,-121],decimals:4,options:{draggable:!0}}}]),angular.module("App").controller("overlay",["$scope",function($scope){$scope.map={center:[39,-100],options:{streetViewControl:!1,scrollwheel:!1},zoom:4},$scope.overlay={url:"data/overlays/Apr_00Z_H.png",bounds:[[23.02083,-124.9792],[50.97917,-65.02084]]}}]),angular.module("App").controller("points",["$scope",function($scope){$scope.map={center:[47.5,-122.5],options:{zoom:6,streetViewControl:!1,scrollwheel:!1}},$scope.points={coords:[[47,-122],[48,-123],[47,-123],[48,-122]],options:function(){return{draggable:!0}},events:{click:function(e,m){alert(e,m)}},decimals:3}}]),angular.module("App").controller("polygons",["$scope",function($scope){$scope.map={center:[25,-70],options:{streetViewControl:!1,scrollwheel:!1},zoom:4},$scope.polygons={coords:[[[[25.774252,-80.190262],[18.466465,-66.118292],[32.321384,-64.75737],[25.774252,-80.190262]]],[[[26.774252,-79.190262],[19.466465,-65.118292],[33.321384,-64.75737],[26.774252,-79.190262]]]],options:function(){return{fillColor:"#e67e22",strokeColor:"#d35400"}},opacity:50}}]),angular.module("App").controller("polylines",["$scope",function($scope){$scope.map={center:[25,-70],options:{streetViewControl:!1,scrollwheel:!1},zoom:4},$scope.polylines={coords:[[[25.774252,-80.190262],[18.466465,-66.118292],[32.321384,-64.75737],[25.774252,-80.190262]],[[26.774252,-79.190262],[19.466465,-65.118292],[33.321384,-64.75737],[26.774252,-79.190262]]],options:function(){return{strokeColor:"#d35400"}}}}]),angular.module("App").controller("rectangles",["$scope",function($scope){$scope.map={center:[39,-121],options:{streetViewControl:!1,scrollwheel:!1}},$scope.rect={bounds:[[[38,-122],[39,-121]],[[38.5,-121.5],[39.5,-120.5]]],options:function(c,map,i){var edit=0===i;return{editable:edit,fillColor:"#e67e22",strokeColor:"#d35400"}}}}]);