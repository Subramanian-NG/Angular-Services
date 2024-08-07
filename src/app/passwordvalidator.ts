import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password1 = control.get('password')?.value;
  const password2 = control.get('confirmPassword')?.value;

  return password1 === password2 ? null : { PasswordNoMatch: true };
};
