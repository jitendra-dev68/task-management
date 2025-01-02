import { FormControl, FormGroup, Validators } from '@angular/forms';

export const LoginForm = new FormGroup({
  email: new FormControl('test@test.com', {
    validators: [Validators.required, Validators.email],
    nonNullable: true,
  }),
  password: new FormControl('Test@123', {
    validators: Validators.required,
    nonNullable: true,
  }),
});
