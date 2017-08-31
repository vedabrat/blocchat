(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    var user = {};
    this.username = user.username;
    this.email =user.email;
    this.password = user.password;

    console.log($cookies.get('blocChatCurrentUser'));
    console.log(!currentUser);
    console.log(currentUser === '');
    // if (!currentUser || currentUser === '') {

          currentUser = prompt("What is your username");
    //       while (currentUser.username = null){}
    //         prompt("give me a username. if you dont this box will never leave")
    // }
    // $cookieStore(currentUser);
    // console.log($cookies.get(blocChatCurrentUser));
    // if (username = '')

    }



  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
