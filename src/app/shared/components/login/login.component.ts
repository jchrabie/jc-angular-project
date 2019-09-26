import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public isSignIn: boolean = true;

  get email(): AbstractControl {
    return this.form.controls.email;
  }

  get password(): AbstractControl {
    return this.form.controls.password;
  }

  get confirmPassword(): AbstractControl {
    return this.form.controls.confirmPassword;
  }

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      civility: new FormControl([]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      confirmPassword: new FormControl(''),
      rememberMe: new FormControl(true),
    });

    this.confirmPassword.setValidators(this.validate.bind(this));
  }

  login() {
    if (this.form.valid) {
      this.authService.loginWithEmail(this.email.value, this.password.value)
        .then(() => this.dialogRef.close())
        .catch(err => this.form.setErrors({err: err.message}));
    }
  }

  toggleSign() {
    this.isSignIn = !this.isSignIn;
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();

    if (this.isSignIn) {
      this.form.removeControl('civility');
      this.form.removeControl('confirmPassword');
      this.form.removeControl('firstName');
      this.form.removeControl('lastName');

      return;
    }

    this.form.addControl('civility', new FormControl([]));
    this.form.addControl('confirmPassword', new FormControl());
    this.form.addControl('firstName', new FormControl());
    this.form.addControl('lastName', new FormControl());
  }

  forgotPassword() {
    if (!this.email.value) {
      this.email.markAsDirty();
      this.email.markAsTouched();

      return;
    }

    this.authService.resetPassword(this.email.value)
      .then(() => this.openSnackBar(`Un Mail vous a été envoyé à l'adresse ${this.email.value}`))
      .catch(err => this.form.setErrors({err: err.message}));
  }

  createAccount() {
    if (this.form.valid) {
      this.authService.createWithEmail(this.form.value)
        .then(() => this.dialogRef.close())
        .catch(err => this.form.setErrors({err: err.message}));
    }
  }

  loginWithProvider(provider: string) {
    if (provider === 'facebook') {
      this.authService.loginWithFacebook()
        .then(() => this.dialogRef.close())
        .catch(err => this.form.setErrors({err: err.message}));
      return;
    }

    this.authService.loginWithGoogle()
      .then(() => this.dialogRef.close())
      .catch(err => this.form.setErrors({err: err.message}));
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 4000,
    });
  }

  // Validate password and confirmPassword
  private validate() {
    if (this.confirmPassword.value && this.confirmPassword.value !== this.password.value) {
      return { doesMatchPassword: true };
    }

    return;
  }
}
