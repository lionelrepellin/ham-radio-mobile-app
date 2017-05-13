angular.module('app.routes')

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('menu.bandPlan', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bandPlan.html',
        controller: 'bandPlanCtrl'
      }
    }
  })

  .state('menu.qrp', {
    url: '/qrp',
    views: {
      'side-menu21': {
        templateUrl: 'templates/qrp.html',
        controller: 'qrpCtrl'
      }
    }
  })

  .state('menu.qrss', {
    url: '/qrss',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frequencies.html',
        controller: 'qrssCtrl'
      }
    }
  })

  .state('menu.psk31', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frequencies.html',
        controller: 'psk31Ctrl'
      }
    }
  })

  .state('menu.jt9', {
    url: '/jt9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frequencies.html',
        controller: 'jt9Ctrl'
      }
    }
  })

  .state('menu.jt65', {
    url: '/jt65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frequencies.html',
        controller: 'jt65Ctrl'
      }
    }
  })

  .state('menu.emergency', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frequencies.html',
        controller: 'emergencyCtrl'
      }
    }
  })

  .state('menu.sstv', {
    url: '/sstv',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frequencies.html',
        controller: 'sstvCtrl'
      }
    }
  })

  .state('menu.digitalVoice', {
    url: '/digitalVoice',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frequencies.html',
        controller: 'digitalVoiceCtrl'
      }
    }
  })

  .state('menu.contests', {
    url: '/contests',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contests.html',
        controller: 'contestsCtrl'
      }
    }
  })

  .state('menu.mainBand', {
    url: '/mainBandPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mainBand.html',
        controller: 'mainBandCtrl'
      }
    }
  })

  .state('menu.subBandDetail', {
    url: '/bandDetail',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bandDetail.html',
        controller: 'bandDetailCtrl'
      }
    }
  })

  .state('menu.fav22', {
    url: '/fav22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fav22.html',
        controller: 'fav22Ctrl'
      }
    }
  })

  .state('menu.uft', {
    url: '/uft',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frequencies.html',
        controller: 'uftCtrl'
      }
    }
  })

  .state('menu.rstCode', {
    url: '/rstCode',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rstCode.html',
        controller: 'rstCodeCtrl'
      }
    }
  })

  .state('menu.distanceCalculator', {
    url: '/distanceCalculator',
    views: {
      'side-menu21': {
        templateUrl: 'templates/distanceCalculator.html',
        controller: 'distanceCalculatorCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

});