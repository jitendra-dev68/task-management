import { FormControl, FormGroup } from '@angular/forms';

export const LoginForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});
