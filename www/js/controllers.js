angular.module('starter.controllers', [])

 
.controller('NotesCtrl', function($scope, $stateParams) {
  $scope.test="test";

  $scope.notes=[
  {
    title:'Pay bills',
    note:'Pay Mobile bill',
    date:'21/03/2017'
  },
  {  title:'Web Assigment',
    note:'Note Applicaiton due',
    date:'21/03/2017'

  }];
 });
