// like element buttom

let likeBtns = document.querySelectorAll(".like")



likeBtns.forEach(btn=> (
    btn.addEventListener("click" , function(){
        btn.classList.toggle("liked")
        }
    )
))
// modal form 
let modalFormBtn = document.querySelectorAll(".more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

modalFormBtn.forEach((item) => item.addEventListener("click",showModal ) );

btnClose.addEventListener("click" , hideModal);

function showModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
}
function hideModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
}
modal.addEventListener("click" , function(e){
    if(e.target === modal) {
        hideModal()
    }
})
// product-quantity 
    // let btnMinus = document.querySelectorAll(".decrement-button");
    // let inputValue = document.querySelectorAll(".input-quantity");
    // let btnPlus = document.querySelectorAll(".increment-button");
    

    // document.addEventListener("DOMContentLoaded" , ready )
    // function ready () {
    //     btnMinus.disabled = true
    // }
//     let minCount = 1
//     let maxCount = 5
    
//     inputValue.forEach((item , i ) =>(
//         toggleButtonsState(item.value ,btnMinus[i] , btnPlus[i])
//     )

//     )

//     function toggleButtonsState(count ,  btnPlus , btnMinus ){
//         btnPlus.disabled = count <=   minCount;
//         btnMinus.disabled = count >= maxCount ;
//     }
    
    
    
//     btnPlus.forEach((item , i) =>(
//         item.addEventListener("click" ,function() {
//         let currentValue = + inputValue[i].value ;
//         let nextValue = currentValue + 1;
//         inputValue[i].value = nextValue;
//         toggleButtonsState(nextValue, item ,btnMinus[i] )
//     }) 
// )
//     )
//     btnMinus.forEach((item , i) =>
//         item.addEventListener("click" ,function() {
//         let currentValue = + inputValue[i].value ;
//         let nextValue = currentValue - 1;
//         inputValue[i].value = nextValue;
//         toggleButtonsState(nextValue , item , btnPlus[i])
// } ))
    

// SLIDER SLICK
$('.slider-block').slick({
  dots:true
})


// Counter function constructor
let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let quantityInput = document.querySelectorAll(".product-quantity input")[0];

function Counter(incrementBtn, decrementBtn, inputField , minCount = 1 , maxCount = 5  )  {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.toggleButtonsState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
  };
  this.toggleButtonsState()

  this.increment = function () {
      console.log(this.domRefs)
    let currentValue = +this.domRefs.inputField.value;
    let nextValue = currentValue + 1;
    this.domRefs.inputField.value = nextValue;
    this.toggleButtonsState();
  };
  this.decrement = function () {
    let currentValue = +this.domRefs.inputField.value;
    let nextValue = currentValue - 1;
    this.domRefs.inputField.value = nextValue;
    this.toggleButtonsState();
  };


  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}
const counter = new Counter(incrementBtns, decrementBtns, quantityInput);

console.log(counter);
