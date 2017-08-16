(function() {
    function HomeCtrl(Room) {
    this.chatRooms = Room.all;
    console.log(this.chatRooms.length);
    
    

}

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
} ) ();