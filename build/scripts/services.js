app.service('Order',function(){

    var _baskett=[];
    var _totalprice=0;

    this.puttobasket = function (basket){
        _baskett.push(basket);
    };
    this.returnorder = function(){
        return _baskett;
    };
    this.setprice=function(price){
        _totalprice=price;
    };
    this.returnprice=function(){
        return _totalprice;
    };

});