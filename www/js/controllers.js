var app=angular.module('starter.controllers', []);

 
app.controller('NotesCtrl', function($scope,$state, $stateParams,$firebaseObject) {
 
 $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true
   $scope.titlename='';

var ref=firebase.database().ref();
$scope.name=$firebaseObject(ref);
 

  if($state.current.name==='tab.notes')
  {
    $scope.titlename='Notes';
  }
  else if($state.current.name==='tab.add')
  {
    $scope.titlename='Add';
  }
$scope.getData=function () {
  // body...
    // firebase.database().ref('/').on('child_added',(snapshot)=>{
    //   $scope.notes.push(snapshot.val())
    // })
}
$scope.getData();


  // $scope.notes=[
  // {
  //   title:'Pay bills',
  //   note:'Pay Mobile bill',
  //   date:'21/03/2017'
  // },
  // {  title:'Web Assigment',
  //   note:'Note Applicaiton due',
  //   date:'21/03/2017'

  // }];

  $scope.go = function (route) {
           $state.go(route);
  };

  $scope.addNote=function (){

   $state.go('tab.add',{});

   // for(var i=0;i<2;i++)
   // {
   //     console.log(i);
   // }

  };

 }) ;

app.controller('AddCtrl', function($scope,$state, $stateParams,$firebaseObject) {
  $scope.test="test";
    
var ref=firebase.database().ref();
var messageRef=ref.child("notes");
$scope.name=$firebaseObject(ref);
 
 var data=$firebaseObject(messageRef);

 $scope.insertData=function(notes)
 {
  data.$add({title:notes.title,
              note:notes.note

            })
  .then(function(ref)
  {
    alert('done');
  });
    //firebase.database().ref('/').push({title:notes.title,note:notes.note});

 };
$scope.notes='';
$scope.getData=function () {
  // body...
    firebase.database().ref('/').on('child_added',(snapshot)=>{
      this.notes.push(snapshot.val())
    })
}
 
 
 });
