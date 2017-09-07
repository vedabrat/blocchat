(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    console.log($cookies.get('blocChatCurrentUser'));
    console.log(!currentUser);
    console.log(currentUser === '');
      if (!currentUser || currentUser === '') {

      $uibModal.open({
          templateUrl: '/templates/usermodal.html',
          size: 'sm',
          controller: 'ModalCtrl as modal'
      });
      }
    // $cookieStore(currentUser);
    // console.log($cookies.get(blocChatCurrentUser));
    // if (username = '')

  }



  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies ]);
})();
