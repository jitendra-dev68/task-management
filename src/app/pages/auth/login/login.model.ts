import { FormControl, FormGroup, Validators } from '@angular/forms';

export const LoginForm = new FormGroup({
  email: new FormControl('', {
    validators: [Validators.required, Validators.email],
    nonNullable: true,
  }),
  password: new FormControl('', {
    validators: Validators.required,
    nonNullable: true,
  }),
});
