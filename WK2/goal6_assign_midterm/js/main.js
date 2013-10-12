/*
	* Mid Terms for PWA-1
*/

(function(){
  
 var student = {
 	name: ‘Joshua Velez’, 
 	address:{
 		address: ‘94-1411 Kulewa Loop’, 
 		city: ‘Waipahu’, 
 		state: ‘HI’}, 
 	gpa: [2.5, 3.5, 4.0]}
  
  console.log(student.name)
  console.log(student.['address'])
  console.log(student.[gpa])
  
  
})();