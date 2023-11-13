import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SubmitService {
  private submitContactMeForm = new BehaviorSubject<boolean>(false);
  isFormSubmitted$ = this.submitContactMeForm.asObservable();
  constructor() {}

  onFormSubmit(isFormSubmit: boolean) {
    this.submitContactMeForm.next(isFormSubmit);
  }
}
