(function() {
     function ModalCtrl(Room, $uibModalInstance, $cookies, currentUser) {
         this.cancel = function () {
             $uibModalInstance.dismiss();
         };

         this.submit = function () {
             Room.add(this.newRoom);
             $uibModalInstance.close();
         };
         this.setUsername = function (currentUser) {

            if(currentUser == null){
              alert("In order to use Blocchat, you must enter a valid username")
            }else{
                $cookies.put('blocChatCurrentUser', currentUser);
                $uibModalInstance.close();
              }
         };
     }

     angular
         .module('blocChat')
         .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
 })();
