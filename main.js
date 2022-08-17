const btn = document.querySelectorAll('#addcart')
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener('click',function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector('img').src
        var productName = product.querySelector('span').innerText
        var productPrice = product.querySelector('.price_1').innerText
        // console.log(productImg,productName,productPrice)
        addcart(productImg,productName,productPrice)
    }})

})
function addcart(productImg,productName,productPrice){
    var addtr = document.createElement('tr')
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll('.name_prd')
        if(productT[i].innerHTML == productName ){
        alert('Sản phẩm bạn thêm đã có trong giỏ hàng')
        return
        }
    }
    var trcontent = '<tr><td><img src="'+productImg+'" alt=""><span class= "name_prd">'+productName+'</span></td><td><span class ="price_prd">'+productPrice+'</span></td><td><input type="number" value="1" min="1"></td>   <td><span class="delete-prd">Xoá</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector('tbody')
    // console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

// --------------------total-price------------------
function carttotal (){
    var cartItem = document.querySelectorAll('tbody tr')
    var totalC = 0
    // console.log(cartItem.length)
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector('input').value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector('.price_prd').innerHTML
        // console.log(productPrice)
        totalA = inputValue*productPrice*1000
        // totalB = totalA.toLocaleString('de-DE')
        // console.log(totalB)
        totalC = totalC + totalA
        // console.log(totalC)
    }
    var carttotalA = document.querySelector('.price-total span')
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange ()
    // console.log(carttotalA)
}

// --------------------Delete-cart------------------
function deleteCart(){
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll('.delete-prd') 
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal ()
        })
    }
}
// ----------------------------Input-change------------------
function inputchange (){
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector('input') 
        inputValue.addEventListener("change",function(){
        carttotal()
        })
    }
      
}
// --------------------------------cart----------------------------------------
// const cartbtn = document.querySelector('.btn_x')
// const cartshow = document.querySelector('.cart')
// cartshow.addEventListener('click',function(){
//     document.querySelector('.on_off_cart').style.display = "block"
// })
// cartbtn.addEventListener('click',function(){
//     document.querySelector('.on_off_cart').style.display = "none"
//     console.log('aa')
// })





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
