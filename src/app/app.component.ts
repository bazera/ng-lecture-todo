import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  Gender,
  GymForm,
  Hobbies,
  Occupation,
  RegisterForm,
} from './app.model';
import { emailValidator, forbiddenWordsValidator } from './app.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  occupation = Occupation;
  gender = Gender;

  form: FormGroup<RegisterForm> = this.buildForm();

  isSubmitted = false;

  get plusBtnDisabled() {
    return this.form.controls.hobbies?.length === 5;
  }

  get removeBtnDisabled() {
    return this.form.controls.hobbies?.length === 1;
  }

  hobbies = [];

  constructor(private fb: FormBuilder) {}

  handleSubmission() {
    this.isSubmitted = true;
    console.log(this.form);
  }
  // this.fb.group<GymForm>({
  //   type: this.fb.control(Hobbies.Gym),
  //   workoutDay: this.fb.control(new Date()),
  // }),
  private buildForm() {
    return this.fb.group<RegisterForm>({
      firstName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        forbiddenWordsValidator(),
      ]),
      lastName: this.fb.control('', [Validators.required]),
      age: this.fb.control(null, [
        Validators.required,
        Validators.min(18),
        Validators.max(80),
      ]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      occupation: this.fb.control(null),
      gender: this.fb.control(Gender.Male, [Validators.required]),
    });
  }

  addHobbyControl() {
    if (this.form.controls.hobbies?.length === 5) {
      return;
    }

    const hobbies = this.form.controls.hobbies;
    // hobbies?.push(this.fb.control(''));
  }

  removeHobbyControl(index: number) {
    const hobbies = this.form.controls.hobbies;
    hobbies?.removeAt(index);
  }

  private handleOccupation(occupation: Occupation | null) {
    switch (occupation) {
      case Occupation.Developer: {
        this.form.addControl('developerOf', this.fb.control(''));
        this.form.removeControl('managerOf');
        break;
      }
      case Occupation.Manager: {
        this.form.addControl('managerOf', this.fb.control(''));
        this.form.removeControl('developerOf');
        break;
      }
      case Occupation.Tester: {
        this.form.removeControl('managerOf');
        this.form.removeControl('developerOf');
        break;
      }
    }
  }

  ngOnInit() {
    this.form.controls.email.addAsyncValidators(emailValidator());

    this.form.controls.occupation?.valueChanges.subscribe((occupation) =>
      this.handleOccupation(occupation)
    );
  }
}
