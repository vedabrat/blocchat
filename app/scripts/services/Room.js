(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    console.log(rooms.length);
    Room.all = rooms;
    console.log(Room.all);
    console.log(Room);
    return Room;
  
  }



  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();