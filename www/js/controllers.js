var app=angular.module('starter.controllers', ['firebase']);

 
app.controller('NotesCtrl', function($scope,$state, $stateParams,$firebaseArray,$firebaseObject) {
 
 $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true
 $scope.titlename='';
 $scope.editnote='';
 $scope.edittrue=false;

 //$scope.obj={title:'test1',note:'test1'};
 var ref=firebase.database().ref();
   $scope.data=$firebaseArray(ref);

 //  $scope.notes=$firebaseArray(ref);

console.log($scope.notes);

 // var messageRef=ref.child("notes");
 // var list =$firebaseArray(ref);
   // $scope.data=$firebaseArray(messageRef);
 

$scope.showData=function()
{
  $scope.edittrue=false;
};
 $scope.insertData=function(notes)
 {
 
      $scope.data.$add({
                  title:notes.title,
                  note:notes.note,
                  date:new Date()

                })
      .then(function(ref)
      {
        var id=ref.key;

        console.log(id);

          console.log('>>>Data');
     
      });
   

 };

 $scope.update=function(id)
 {
   $scope.data.$save($scope.currentObj).then(function(ref)
    {
      var id=ref.key;
     });

 console.log('id= '+id);

 };
 

$scope.remove=function()
{
  $scope.data.$remove($scope.id);
    console.log('remove button hited');

};
 
$scope.edit=function(note)
{
 $scope.edittrue=true;
 $scope.editnotes=note;
 $scope.currentObj=note;
 $scope.id=note.id;
console.log( $scope.editnotes);
// $state.go('tab.add');

  
 };
    

 
 $scope.getData=function()
 {
    var notes = firebase.database().ref();
        notes.on('value', function(snapshot){

          //Finally you get the 'posts' node and send to scope
          $scope.notes = snapshot.val();

        //  console.log(snapshot.val());

        });

 };
 $scope.getData();
if($state.current.name==='tab.notes')
{
 $scope.getData();
}
 console.log($state.current.name);
 

 }) ;

app.controller('AddCtrl', function($scope,$state, $stateParams,$firebaseArray,EditData) {
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
