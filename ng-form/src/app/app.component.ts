import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
      this.form = this.fb.group({
          value: [ null, [ Validators.required, Validators.minLength(2) ] ]
      });
  }

  submitForm(v) {
      console.log(v);
  }
}
