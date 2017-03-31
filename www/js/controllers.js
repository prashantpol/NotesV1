var app=angular.module('starter.controllers', ['firebase']);

 
app.controller('NotesCtrl', function($scope,$state, $stateParams,$firebaseArray,$firebaseObject) {
 
 // var config = {
 //    apiKey: "AIzaSyC8w_Ne3Pj8jMG2fOQtGWwQRhKo4kVFW08",
 //    authDomain: "notes-851ef.firebaseapp.com",
 //    databaseURL: "https://notes-851ef.firebaseio.com",
 //    storageBucket: "notes-851ef.appspot.com",
 //    messagingSenderId: "291084386055"
 //  };
 //  firebase.initializeApp(config);


 $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true
 $scope.titlename='';
 $scope.editnote='';
 $scope.edittrue=false;
 $scope.today=new Date();

 //$scope.obj={title:'test1',note:'test1'};
// var ref=firebase.database().ref();

var url = 'https://notes-851ef.firebaseio.com/';
var fireRef = new Firebase(url);

   $scope.notes=$firebaseArray(fireRef);

 //  $scope.notes=$firebaseArray(ref);

console.log($scope.notes);

 // var messageRef=ref.child("notes");
 // var list =$firebaseArray(ref);
   // $scope.data=$firebaseArray(messageRef);
 
console.log(new Date())

$scope.showData=function()
{
  $scope.edittrue=false;
};

 $scope.insertData=function(notes)
 {

 
      $scope.notes.$add({
                  date:$scope.today.toString(),
                  title:notes.title,
                  note:notes.note,
                })
      .then(function(ref)
      {
        var id=ref.key;

        console.log(id);

          console.log('>>>Data');
     
      });
   

 };

 $scope.update=function()
 {
   $scope.notes.$save($scope.currentObj);

console.log('Current Update');
 console.log($scope.currentObj);

 };
 

$scope.remove=function(notes)
{
  $scope.notes.$remove(notes);
    console.log('remove button hited');

};
 
$scope.edit=function(note)
{
 $scope.edittrue=true;
 $scope.editnotes=note;
 $scope.currentObj=note;

 $scope.id=note.id;

 // $state.go('tab.add');

  
 };
    

 
 $scope.getData=function()
 {
    //var notes = firebase.database().ref();
        var notes = $firebaseArray(fireRef);

$scope.notes=notes;
        // notes.on('value', function(snapshot){

        //   //Finally you get the 'posts' node and send to scope
        //   $scope.notes = snapshot.val();

        // //  console.log(snapshot.val());

        // });

 };
 $scope.getData();
if($state.current.name==='tab.notes')
{
 $scope.getData();
}
 console.log($state.current.name);
 

 }) ;

app.controller('AddCtrl', function($scope,$state, $stateParams,EditData) {
  $scope.test="test";
    
// var ref=firebase.database().ref();
// var messageRef=ref.child("notes");
//  var list =$firebaseArray(ref);
//  console.log(list);
//   $scope.data=$firebaseArray(messageRef);

//  $scope.obj=EditData;
//  console.log('test',$scope.obj);

//  $scope.insertData=function(notes)
//  {
 
//       $scope.data.$add({title:notes.title,
//                   note:notes.note,
//                   date:new Date()

//                 })
//       .then(function(ref)
//       {
        
//           console.log('>>>Data');
     
//       });
   

//  };
 
 
 
 });
