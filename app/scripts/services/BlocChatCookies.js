(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    console.log($cookies.get('blocChatCurrentUser'));
    console.log(!currentUser);
    console.log(currentUser);
    if (!currentUser || currentUser === '') {
      currentUser = prompt("give me currentUser NOW.");
      $cookies.put('blocChatCurrentUser', currentUser);
      console.log('I SAVED A COOKIE IN PART 1');
      console.log($cookies.get('blocChatCurrentUser'));
    }
    console.log(currentUser);
  }



  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
