 
// let para = document.createElement('p');
// document.body.appendChild(para
//   para.textContent=`${count}`;
//  count--;
//     if(count==0)
//      {
//          para.textContent='Happy new year';
//      }
//  }
const countdownElement = document.getElementById('countdown');

let countdown=function (count) {
    countdownElement.textContent = count;
    count--;

    if (count > 0) {
        setTimeout(function() {
            countdown(count);
        }, 1000); // Wait for 1 second (1000 milliseconds)
    } else {
        countdownElement.textContent = "Happy New Year!";
    }
};
countdown(10);