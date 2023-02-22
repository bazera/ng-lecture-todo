import { FormArray, FormControl, FormGroup } from '@angular/forms';

export enum Occupation {
  Developer = 'Developer',
  Manager = 'Manager',
  Tester = 'Tester',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export enum Hobbies {
  Reading = 'Reading',
  Gym = 'Gym',
}

export interface GymForm {
  type: FormControl<Hobbies.Gym | null>;
  workoutDay: FormControl<Date | null>;
}

export interface ReadingForm {
  type: FormControl<Hobbies.Reading | null>;
  pagePerDay: FormControl<number | null>;
}

export type InputHobbiesForm = GymForm | ReadingForm;

export interface RegisterForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  hobbies?: FormArray<FormControl>;
  age: FormControl<number | null>;
  email: FormControl<string | null>;
  occupation?: FormControl<Occupation | null>;
  gender: FormControl<Gender | null>;
  developerOf?: FormControl<string | null>;
  managerOf?: FormControl<string | null>;
}
