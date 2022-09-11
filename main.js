// show info header
document.querySelector('.activer_find-us').addEventListener('click', function () {
    this.parentElement.classList.toggle('open_find-us')
    this.previousElementSibling.focus()
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~cart~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const btn = document.querySelectorAll('#addcart')
// console.log(btn)
btn.forEach(function (button, index) {
    button.addEventListener('click', function (event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector('img').src
            var productName = product.querySelector('span').innerText
            var productPrice = product.querySelector('.price_1').innerText
            // console.log(productImg,productName,productPrice)
            addcart(productImg, productName, productPrice)
        }
    })
})
function addcart(productImg, productName, productPrice) {
    let countItem = 0;
    var addtr = document.createElement('tr')
    var cartItem = document.querySelectorAll('tbody tr')

    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll('.name_prd')
        if (productT[i].innerHTML == productName) {
            countItem++;
        }
    }
    if (countItem > 0) {
        let itemNumber = document.getElementById(productName).getAttribute('value');
        itemNumber++;
        document.getElementById(productName).setAttribute('value', itemNumber);
    } else {
        var trcontent = '<tr class="cart-row"><td><img src="' + productImg + '" alt=""><span class= "name_prd">' + productName + '</span></td><td><span class ="price_prd">' + productPrice + '</span></td> <td> <input id="' + productName + '" class="cart-quantity-input" type="number" step="1" value="1" min="1"> </input>  </td>  <td><span class="delete-prd">Xoá</span></td></tr>'
        addtr.innerHTML = trcontent
        var cartTable = document.querySelector('tbody')
        // console.log(cartTable)
        cartTable.append(addtr)
    }

    carttotal()
    deleteCart()

    console.log();
}
// --------------------total-price------------------
function carttotal() {
    var cartItem = document.querySelectorAll('tbody tr')
    var totalC = 0
    // console.log(cartItem.length)
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('input').value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector('.price_prd').innerHTML
        // console.log(productPrice)
        totalA = inputValue * productPrice * 1000
        // totalB = totalA.toLocaleString('de-DE')
        // console.log(totalB)
        totalC = totalC + totalA
        // console.log(totalC)
    }
    var carttotalA = document.querySelector('.price-total span')
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
    document.getElementsByClassName('item-numb')[0].textContent = i /= 1;
}
// --------------------Delete-cart------------------
function deleteCart() {
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll('.delete-prd')
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
        })
    }
}
// ----------------------------Input-change------------------
function inputchange() {
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('input')
        inputValue.addEventListener("change", function () {
            carttotal()
        })
    }
}
// --------------------------------cart----------------------------------------
// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function () { myFunction() };

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onload = function () {
    document.onclick = function (e) {
        if (e.target.id !== 'myDropdown' && e.target.id !== 'myBtn' && e.target.id !== 'cart-click') {
            document.getElementById("myDropdown").classList.remove("show");
        }
    };
};

// click outside


// $("#myBtn").click(function (e) {
//     $("#myDropdown").show();
//     e.stopPropagation();
//     $("#myDropdown").click(function (e) {
//         e.stopPropagation();
//     });
//     $(document).click(function () {
//         $("#myDropdown").hide();

//     });
//     $("#myBtn").click(function () {
//         $("#myDropdown").hide();


//     });
// });

// $(document).ready(function(){
//     $("#myBtn").click(function(){
//         $("#myDropdown").slideToggle("show");
//     });
// });
// $(document).click(function (e){
//     var outcart = $("#myDropdown");
//     if (!outcart.is(e.target) && outcart.has(e.target).length === 0)
//     {
//         outcart.hide();
//     }
// });

// // cách nào đó khác
//     document.getElementById("myDropdown").style.display = "none";

// function showcart(){
//   var x = document.getElementById("myDropdown");
//   if(x.style.display === "block"){
//     x.style.display = "none";
//   }
//   else{
//     x.style.display = "block";
//   }
// }

// $('tbody').on('click', '.minus',function () {
//     var $input = $(this).parent().find('input');
//     var count = parseInt($input.val()) - 1;
//     count = count < 1 ? 1 : count;
//     $input.val(count);
//     $input.change();
//     carttotal ()
//     return false;
//   });
//   $('tbody').on('click', '.plus',function () {
//     var $input = $(this).parent().find('input');
//     $input.val(parseInt($input.val()) + 1);
//     $input.change();
//     carttotal ()
//     return false;
//   });


if ($('.click-cosmetic').length > 0) {
    $(document).on('click', '.click-cosmetic', function (e) {
        $(this).closest('.click-cosmetic').find('.cosmetic-in').addClass('cosmetic_in-active');
        e.preventDefault();
    })
} $(document).click(function (e) {
    var elm = $(e.target);
    if (!elm.closest('.click-cosmetic').length) {
        $('.cosmetic-in').removeClass('cosmetic_in-active')
    }
})
$('.click-cosmetic').click(function (e) {
    $('.cosmetic-in').toggleClass('cosmetic_in-active');
    e.preventDefault();
})


if ($('.click-cosmetic').length > 0) {
    $(document).on('click', '.click-cosmetic', function (e) {
        $(this).closest('.click-cosmetic').find('.cosmetic-in').addClass('cosmetic_in-active');
        e.preventDefault();
    })
}
// click out category

$(".categori-menu").click(function (e) {
    $(".categori").show();
    e.stopPropagation();
    $(".categori").click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function () {
        $(".categori").hide();
    });
});

function showcate(){
  var x = document.getElementById("categori");
  if(x.style.display === "block"){
    x.style.display = "none";
  }
  else{
    x.style.display = "block";
  }
}
