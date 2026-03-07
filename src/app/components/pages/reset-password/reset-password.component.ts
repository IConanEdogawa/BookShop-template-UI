import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss',
    standalone: false
})
export class ResetPasswordComponent {
  code = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onResetPassword(): void {
    // Implement your reset password logic here
    if (this.password === this.confirmPassword) {
      console.log('Reset Password:', this.code, this.password);
      // Navigate to login page on successful password reset
      this.router.navigate(['/login']);
    } else {
      console.error('Passwords do not match');
    }
  }
}
