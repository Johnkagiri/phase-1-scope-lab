
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer='nobody';
upperCaseCustomerName = function (){    
    customerName='bob'.toUpperCase();
    return customerName.toUpperCase();
}
setBestCustomer = function(){
    bestCustomer='not bob';
}
function overwriteBestCustomer(){
     bestCustomer='maybe bob';
}
function changeLeastFavoriteCustomer(){
     leastFavoriteCustomer='somebody';
}