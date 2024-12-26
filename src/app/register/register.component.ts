import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formData = {
    firstName: '',
    lastName: '',
    state: '',
    email: '',
    confirmEmail: '',
    subscribe: false,
  };

  constructor(private userService: UserService) {} // Ensure UserService is correctly injected

  ngOnInit(): void {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.invalid) {
      Object.keys(contactForm.controls).forEach((field) => {
        const control = contactForm.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }

    this.userService.storeUserData(this.formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        alert('Registration successful!');
      },
      (error) => {
        console.error('Error saving data:', error);
        alert('Failed to register. Please try again.');
      }
    );
  }
}
