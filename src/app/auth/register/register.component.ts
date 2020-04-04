import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cofund-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  credentials = {
    email: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.credentials.email);
    this.authService.register(this.credentials.email).subscribe(() => this.router.navigateByUrl('/register-success'));
  }

}
