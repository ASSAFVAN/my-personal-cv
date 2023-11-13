import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubmitService } from 'src/app/services/submit.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  constructor(private fb: FormBuilder, public submitService: SubmitService) {}

  isFormSubmitted = false;

  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z-]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z-]+$')]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{1,20}$')]],
  });

  isFieldInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return (
      !!control &&
      control?.invalid &&
      (control?.dirty || control?.touched || this.isFormSubmitted)
    );
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitService.onFormSubmit(true);
    } else {
      this.isFormSubmitted = true;
    }
  }

  ngOnInit(): void {
    this.submitService.isFormSubmitted$.subscribe((data: boolean) => {
      this.isFormSubmitted = data;
    });
  }
}
