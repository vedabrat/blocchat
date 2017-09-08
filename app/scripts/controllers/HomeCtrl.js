(function() {
    function HomeCtrl(Room, $uibModal, Message) {
      this.chatRooms = Room.all;

      this.addRoom = function() {
  	     $uibModal.open({
  	         templateUrl: '/templates/modal.html',
  	         size: 'sm',
  	         controller: 'ModalCtrl as modal'
  	     });
  	  }
      this.addUser = function() {
  	     $uibModal.open({
  	         templateUrl: '/templates/usermodal.html',
  	         size: 'sm',
  	         controller: 'ModalCtrl as modal'
  	     });
  	  }
      this.setCurrentRoom = function (room){
          this.currentRoom = room;
          this.messages = Message.getByRoomId(room.$id);
          // console.log (this.currentRoom);
          // console.log (this.messages);
      }
      this.addMessage = function (newMessage){
        Message.send(newMessage);

        return;
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
} ) ();
