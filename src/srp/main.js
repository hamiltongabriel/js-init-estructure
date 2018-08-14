// Criando a ordem
function Order(customerId) {
  this.customerId = customerId;
  this.dateTime = new Date();
  this.items = [];
}
// Gerenciamento da ordem
const OrderManager = (function () {
  function OrderManager() {}
  OrderManager.prototype.createOrder = function (customerId) {
    this.order = new Order(customerId);
  };
  OrderManager.prototype.addItem = function (item) {
    this.order.items.push(item);
  };
  OrderManager.prototype.sendOrder = function (){
    if(this.isValid(this.order)){
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        (xhr.readyState == 4 && xhr.status == 200){
          var response = JSON.parse(xhr.responseText);
          handleResponse(response)
        }
      };
      xhr.open("POST", "/api/orders");
      xhr.setRequestHeader("Content Type", "application/json;charset=UTF-8")
      xhr.send(JSON.stringify(order));
    }
    else{
      handleError({
        message : 'Not valid order'
      });
    }
  }
})
;