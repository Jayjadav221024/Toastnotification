let toastbox = document.getElementById('toastbox');
let sucessmsg = '<i class="fa-solid fa-circle-check"></i>sucessfull submited';
let errormsg = '<i class="fa-solid fa-circle-xmark"></i>please fix this eroor';
let invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid masg';

function showtoast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast);

    if (msg.includes('eroor')) {
        toast.classList.add('eroor');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }


    // setTimeout(()=>{
    //     toast.remove();
    //  },5000);
}
