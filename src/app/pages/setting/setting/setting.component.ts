import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
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
