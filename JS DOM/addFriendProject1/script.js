var istatus = document.querySelector("h5")
var btn = document.querySelector('#add')
// var remove = document.querySelector('#remove')  remove btton
var check = 0;
add.addEventListener('click',function () {
    // istatus.textContent = "Friends"  Here text content is also used
    if(check==0){
        istatus.innerHTML = "Friends"   
         btn.textContent="Remove Friend"
        istatus.style.color = "green"
        check = 1

    }
    else{
        istatus.innerHTML = "Stranger"
          istatus.style.color = "red"
          btn.textContent="Add Friend"
          check = 0

    }
})
        

// remove.addEventListener('click',function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
// })

