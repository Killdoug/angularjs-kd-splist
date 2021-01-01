import angular from 'angular';

angular.module('spNgModuleTest', []);

(function () {
    angular.module("spNgModuleTest", ["spNgModule"])
    .constant("IS_APP_WEB", false);
})();

angular.module("spNgModuleTest")
    .factory("spNgTestSvc", spNgTestSvc);

    spNgTestSvc.$inject = ["spBaseService"];



// Create an angular module named 'app'.
angular.module('app', []);





// Put application code here before bootstrap is called.
angular.module('app').factory('messages', function(){
  var messages = {};

  messages.list = [];

  messages.add = function(message){
    messages.list.push({id: messages.list.length, text: message});
  };

  return messages;
});

angular.module('app').controller('ListCtrl', function (messages){
  var self = this;

  self.messages = messages.list;
});

angular.module('app').controller('PostCtrl', function (messages){
  var self = this;

  self.newMessage = 'Hello World!';

  self.addMessage = function(message){
    messages.add(message);
    self.newMessage = '';
  };
});

// Bootstrap angular onto the 'app' element, injecting the 'app' module.
angular.bootstrap(document.getElementById('app'), ['app']);
angular.bootstrap(document.getElementById('spNgModuleTest'), ['spNgModuleTest']);

