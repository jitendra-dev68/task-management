import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginForm } from './login.model';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = LoginForm;
  private readonly _auth = inject(AuthService);

  login() {
    this._auth
      .login(this.loginForm.value)
      .pipe(
        map((users) => {
          const user = users.find(
            (user) => user.email === this.loginForm.value.email
          );
          if (!user) {
            throw new Error('User not found');
          }
          console.log('user: ', user);
        })
      )
      .subscribe();
  }
}
