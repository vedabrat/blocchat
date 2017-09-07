(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    var user = {};
    this.username = user.username;
    this.email =user.email;
    this.password = user.password;

    console.log($cookies.get('blocChatCurrentUser'));
    console.log(!currentUser);
    console.log(currentUser === '');
      if (!currentUser || currentUser === '') {

        $uibModal.open({
                  templateUrl: '/templates/usermodal.html',
                  controller: function($cookies, $uibModal){
                       this.setUserName = function(currentUser) {
                          if (currentUser && currentUser !== '') {
                              console.log(currentUser);
                              $cookies.put('blocChatCurrentUser', currentUser);
                              $uibModalInstance.close();
                          } else {
                              alert("Invalid Username");
                          }
                      };
                    }
        })
      }
    // $cookieStore(currentUser);
    // console.log($cookies.get(blocChatCurrentUser));
    // if (username = '')

  }



  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies ]);
})();
