import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-materials',
  templateUrl: './learning-materials.component.html',
  styleUrls: ['./learning-materials.component.scss'],
})
export class LearningMaterialsComponent {
  constructor(private router : Router) {}

  ngOnInit() {
    //     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //     //Add 'implements OnInit' to the class.
    //     var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // // Update the count down every 1 second
    // var countdownfunction = setInterval(function() {

    //   // Get todays date and time
    //   var now = new Date().getTime();

    //   // Find the distance between now an the count down date
    //   var distance = countDownDate - now;

    //   // Time calculations for days, hours, minutes and seconds
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //   // Output the result in an element with id="demo"
    //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //   + minutes + "m " + seconds + "s ";

    //   // If the count down is over, write some text
    //   if (distance < 0) {
    //     clearInterval(countdownfunction);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    //   }
    // }, 1000);
    // ------------------------------------------------------------------------------------------------------
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const currentYear = new Date().getFullYear();

    const countDownTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

    //Update Countdowntime
    function updateCountdowntime() {
      const currentTime = new Date();
      const diff = countDownTime.getTime() - currentTime.getTime();

      const d = Math.floor(diff / 1000 / 60 / 60 / 24);
      const h = Math.floor(diff / 1000 / 60 / 60) % 24;
      const m = Math.floor(diff / 1000 / 60) % 60;
      const s = Math.floor(diff / 1000) % 60;

      const dString = d.toString(10);
      days.innerHTML = dString;
      const hString = h.toString(10);
      hours.innerHTML = hString < '10' ? '0' + hString : hString;
      const mString = m.toString(10);
      minutes.innerHTML = mString < '10' ? '0' + mString : mString;
      const sString = s.toString(10);
      seconds.innerHTML = sString < '10' ? '0' + sString : sString;
    }

    // updateCountdowntime();
    setInterval(updateCountdowntime, 1000);
  }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
