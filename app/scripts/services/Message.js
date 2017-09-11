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
            messages.$add({
					content: newMessage,
					user: $cookies.get('blocChatCurrentUser'),
					time: Date.now(),
					room: "-KsF__-Dt9noEOMMsQzo"
					});;
            console.log(newMessage);
         };
         console.log(Message);

         return Message;
     }

     angular
         .module('blocChat')
         .factory('Message', ['$firebaseArray', '$cookies', Message]);
 })();
