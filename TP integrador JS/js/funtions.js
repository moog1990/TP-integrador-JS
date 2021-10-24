getDiscountPrice: function(products) {
    var x = 200
  if (product == "Estudiante") {
    DiscountPrice = totalPrice - (x * .80)
    }
    else if (product == "Trainee"){
        DiscountPrice = totalPrice - (x * .50) 
    } else {
        DiscountPrice = totalPrice - (x * .15)
    }
return DiscountPrice;
 

    console.log("calculating discount" DiscountPrice);

  }