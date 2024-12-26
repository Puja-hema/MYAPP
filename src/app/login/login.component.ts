import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = '';

  correctPassword: string = 'Password@1234'; // Holds the entered password
  
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  onPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
  }

  login() {
    if (this.password === this.correctPassword) {
      console.log('Password matched! Redirecting to register page...');
      this.router.navigate(['/register']); // Redirect to register page
    } else {
      console.error('Invalid password!');
      alert('Invalid password!');
    }
  }
}
