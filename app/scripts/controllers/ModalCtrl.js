(function() {
     function ModalCtrl(Room, $uibModalInstance) {
         this.cancel = function () {
             $uibModalInstance.dismiss();
         };

         this.submit = function () {
             Room.add(this.newRoom);
             $uibModalInstance.close();
         };
         this.setUsername = function (currentUser) {
            $cookies.put('blocChatCurrentUser', currentUser);
            console.log('I SAVED A COOKIE IN PART 2');
            $uibModalInstance.close();
         };
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl, '$cookies']);
 })();
