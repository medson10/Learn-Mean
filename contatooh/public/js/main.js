angular.module('contatooh', ['ngRoute','ngResource']).config(function($routeProvider) {

  $routeProvider.when('/contatos', {
    templateUrl: 'partials/contatos.html',
    controller: 'ContatosController'
  });

});
