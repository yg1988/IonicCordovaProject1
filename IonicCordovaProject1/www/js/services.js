angular.module('starter.services', [])

.factory('Players', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var players = [{
    id: 0,
    isHuman: true,
    intelligenceLevel: '1',
    name: '',
    color: 'random',
    state: ''
  },
  {
      id: 1,
      isHuman: false,
      intelligenceLevel: '1',
      name: '',
      color: 'random',
      state: ''
  }];

  return {
    all: function() {
        return players;
    },
    remove: function(player) {
        players.splice(players.indexOf(player), 1);
    },
    get: function (playerId) {
        for (var i = 0; i < players.length; i++) {
          if (players[i].id === parseInt(playerId)) {
              return players[i];
        }
      }
      return null;
    },
    addPlayer:function(player){
        players.push(player);
    }
  };
});
