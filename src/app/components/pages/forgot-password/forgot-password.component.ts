import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  onSubmitEmail() {
    // Implement your forgot password logic here
    console.log('Forgot Password Email:', this.email);
    // Simulate sending email and navigating to reset password page
    setTimeout(() => {
      this.router.navigate(['/reset-password']);
    }, 10);
  }
}
