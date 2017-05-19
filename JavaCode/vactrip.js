function initialize() {
var geoCenter = new google.maps.LatLng(32.911297, -96.492920)


var mapOptions = {
zoom: 5,
center: geoCenter,

mapTypeId: google.maps.MapTypeId.ROADMAP,
styles: [
  
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }]

};





var map = new google.maps.Map(document.getElementById("map_canvas"),
 mapOptions);

// Amarillo Places
 
 var tylersBBQ_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/TylersBBQ.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
 var LWS_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/LWSBrewery.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });

// Oklahoma Places
 
 var cafe7_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/Cafe7.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
 var tobyKeiths_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/TobyKeithsILoveThisBarandGrill.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
		
// Arkansas Places
 
 var threefold_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/ThreeFoldNoodles.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
 var hogCafe_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/WholeHogCafe.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
		
// Memphis, Tennessee Places
 
 var gusChick_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/GussWorldFamousFriedChicken.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
 var centralBBQ_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/CentralBBQ.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
		
// Nashville, Tennessee Places
 
 var robsWW_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/RobertsWesternWorld.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
 var monells_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/MonellsDining.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
		
// Mississippi Places
 
 var roosters_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/Roosters.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
 var ironhorse_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/TheIronHorseGrill.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
		
// Baton Rouge, LA Places
 
 var louies_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/LouiesCafe.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
 var tonys_kml = new google.maps.KmlLayer("https://livemountain.github.io/MyResumeHomepage/kml/TonysSeafood.kml", {
          suppressInfoWindows: true,
          preserveViewport: true,
          map: map
        });
		


}