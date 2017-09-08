(function() {
     function Message($firebaseArray, $cookies) {
         var Message = {};
         var ref = firebase.database().ref().child("messages");
         var messages = $firebaseArray(ref);
         Message.all = messages;

         Message.getByRoomId = function (roomId) {
             return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
         }
         Message.send = function(newMessage) {
            messages.$add(newMessage);
         };
         console.log(Message);

         return Message;
     }

     angular
         .module('blocChat')
         .factory('Message', ['$firebaseArray', Message, $cookies]);
 })();
