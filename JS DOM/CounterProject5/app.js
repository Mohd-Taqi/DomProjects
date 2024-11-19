// set initial value
let count = 0;
const btns = document.querySelectorAll('.btn');
btns
const value = document.querySelector('#value');
btns.forEach(function(btn) {
    btn.addEventListener('click', function (e) {
        let check = e.currentTarget.classList;
        if(check.contains('increase')){
            count++;
        }
        else if(check.contains('decrease')){
            count--;
        }
        else{
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }

         if(count < 0 ){
            value.style.color = "red";
        }

        if(count === 0){
            value.style.color = "#222";
        }

        value.textContent = count;
        console.dir(value)
    //  console.log(e.currentTarget.classList);
    });
})
