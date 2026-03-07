import { Component } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss',
    standalone: false
})
export class SignupComponent {
  fullname = '';
  email = '';
  password = '';
  showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSignup(): void {
    console.log('Signup:', this.fullname, this.email, this.password);
  }
}
