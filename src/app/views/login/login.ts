import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loading = signal(false);
  error = signal<string | null>(null);

  private fb = inject(FormBuilder);

  protected loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  protected onSubmit(): void {
    if(this.loginForm.invalid) {
      this.error.set('Please fill in the form correctly.');
      return;
    }
    this.error.set(null);
    this.loading.set(true);

    const { username, password } = this.loginForm.value;
    console.log('Login submitted:', username, password);
    // Add your authentication logic here
    setTimeout(() => {
      this.loading.set(false);
    }, 2000);
  }

}
