angular.module('starter.controllers', ['ionic', 'starter.services','Storage'])

.controller('DashCtrl', function ($scope, Players,  storage) {
    $scope.players = Players.all();
    var colorAllOptions = ['red', 'green', 'blue', 'black'];
    var colorOptionUsed = [];
    $scope.colorOptions = colorAllOptions;
    $scope.updateColorSelected = function (event) {

        var selectElement = jQuery(event.target);
        var color = event.target.value;
        colorOptionUsed = _.uniq(jQuery('.selectColorElement').map(function () { return jQuery(this).val(); }));
        selectElement.empty().append('<option>random</option>');
        if (color!=='random')
            selectElement.append('<option class="'+color+'">'+color+'</option>');
        _.each(_.difference(colorAllOptions, colorOptionUsed), function (ele) { selectElement.append('<option class="'+ele+'">' + ele + '</option>'); });
    };
    $scope.data = {
        showDelete: false
    };
    $scope.remove = function (player) {
        Players.remove(player);
    }

    $scope.savePlayerArray = function (players) {
        
        players = _.each(players, function (player) {
            if (player.name === null||player.name ==="") {
                player.name = 'P' + player.id;
            }
        });
        //console.log(players);
        storage.saveToStorage(players);
    };
    $scope.addPlayer = function () {
        var player = {
            id: parseInt((Players.all().length>0)?(_.last(Players.all()).id):-1) + 1,
            isHuman: false,
            intelligenceLevel: '0',
            name: '',
            color: 'random',
            state: ""
        };
        Players.addPlayer(player)
    }
    $scope.increaseIntelligence = function (player) {
        var currentIntelligence=parseInt(player.intelligenceLevel);
        player.intelligenceLevel = (currentIntelligence < 2) ? (parseInt(player.intelligenceLevel) + 1).toString() : player.intelligenceLevel;
    }
    $scope.decreaseIntelligence = function (player) {
        var currentIntelligence = parseInt(player.intelligenceLevel);
        player.intelligenceLevel = (currentIntelligence > 0) ? (parseInt(player.intelligenceLevel) - 1).toString() : player.intelligenceLevel;
    }
})

.controller('GameCtrl', function ($scope, $ionicActionSheet, $timeout, $state) {


  $scope.show = function () {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
          buttons: [
            { text: 'go back' },
          ],
          titleText: 'Game Manual',
          cancelText: 'Cancel',
          cancel: function () {
              // add cancel code..
          },
          buttonClicked: function (index) {
              $state.go('dash');
              return true;
          }
      });

      // For example's sake, hide the sheet after two seconds
      $timeout(function () {
          hideSheet();
      }, 3000);
      

  };
  roll.Roll().main();


})

.controller('GameModeCtrl', function($scope) {
})


