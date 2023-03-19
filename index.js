// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName(){
   customerName = customerName.toUpperCase()    
   return customerName
}

function setBestCustomer(){
   bestCustomer = 'not bob'
   return bestCustomer
}

 function overwriteBestCustomer(){
   bestCustomer = 'maybe bob';
   return bestCustomer
 }

const leastFavoriteCustomer = 'Amos'; 
function changeLeastFavoriteCustomer(){
   leastFavoriteCustomer = leastFavoriteCustomer.toUpperCase()
   return leastFavoriteCustomer
}