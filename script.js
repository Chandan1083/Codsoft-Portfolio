let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple_text', {
    strings: [ 'Frontend Developer','Web Designer'],
    typeSpeed: 50,
    backSpeed:50,
    backDelay:1000,
    loop:true,
  });

const scriptURL = 'https://script.google.com/macros/s/AKfycbyIq1XGeUFBE6p2pU3vkotfE-fk4SGRoAhEp52vanhnOQe_NFBCITa5ZoS0FanEl-P2/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
  
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
        })
        .catch(error => console.error('Error!', error.message))
}); 