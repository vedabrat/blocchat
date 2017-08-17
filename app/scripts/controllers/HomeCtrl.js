(function() {
    function HomeCtrl(Room, $uibModal) {
    this.chatRooms = Room.all;
    console.log(this.chatRooms.length);

    this.addRoom = function() {
	     $uibModal.open({
	         templateUrl: '/templates/modal.html',
	         size: 'sm',
	         controller: 'ModalCtrl as modal'
	     });
	}

    
    

}

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
} ) ();