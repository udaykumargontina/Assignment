import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  countForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.countForm = this.formBuilder.group({
      count: ['', [Validators.required, Validators.min(0)]]
    });
    this.countForm.valueChanges.subscribe(data => {
      this.submitted = false;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.countForm.invalid) {
      return;
    }
  }
}
