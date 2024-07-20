import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  fullname: string = '';
  email: string = '';
  password: string = '';

  // constructor(private router: Router) {}

  onSignup() {
    console.log('Signup:', this.fullname, this.email, this.password);
  }
}
