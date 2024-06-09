import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // constructor(private router: Router) {}

  onLogin() {
    // Implement your login logic here
    console.log('Login:', this.email, this.password);
    // Navigate to another page on successful login
  }
}
