import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cofund-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterSuccessComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  go(url) {
    this.router.navigateByUrl(url)
  }
}
