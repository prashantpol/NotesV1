var app=angular.module('starter.controllers', ['firebase']);

 
app.controller('NotesCtrl', function($scope,$state, $stateParams,$firebaseArray,$firebaseObject) {
 
 $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true
 $scope.titlename='';
 var ref=firebase.database().ref();


     var notes = firebase.database().ref().child('notes');
        notes.on('value', function(snapshot){

          //Finally you get the 'posts' node and send to scope
          $scope.notes = snapshot.val();

          console.log(snapshot.val());

        });
 
     //$scope.notes = $firebaseArray(ref);
// $scope.getData=function(){

//      var notes = firebase.database().ref().child('notes');
//         notes.on('value', function(snapshot){

//           //Finally you get the 'posts' node and send to scope
//           $scope.notes = snapshot.val();

//           console.log(snapshot.val());

//         });

// };

 

 

 }) ;

app.controller('AddCtrl', function($scope,$state, $stateParams,$firebaseArray) {
  $scope.test="test";
    
var ref=firebase.database().ref();
var messageRef=ref.child("notes");
 var list =$firebaseArray(ref);
 console.log(list);
  $scope.data=$firebaseArray(messageRef);
 

 $scope.insertData=function(notes)
 {
  $scope.data.$add({title:notes.title,
              note:notes.note

            })
  .then(function(ref)
  {
   
     console.log('>>>Data');
 
  });
    //firebase.database().ref('/').push({title:notes.title,note:notes.note});

 };
 
 
 
 });
