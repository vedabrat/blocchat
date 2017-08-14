(function() {
    function RoomCtrl(Room) {
        $scope.rooms = Room;
}

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();