import { ApplicationRef, ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent {

  loginForm = new FormGroup({ });
    currentDate: Date = new Date(); 
    
    constructor(private applicationRef: ApplicationRef,private cdr: ChangeDetectorRef) { }
  
    intervalId: any;
  
    ngOnInit(): void {
      this.applicationRef.isStable.pipe(first((isStable: any) => isStable)).subscribe(() => {
        this.intervalId = setInterval(() => this.getTime(), 1000);
      });
    }
  
    ngOnDestroy(): void {
      clearInterval(this.intervalId);
    }
  
    getTime(): void {
      this.currentDate = new Date();
      this.cdr.detectChanges();
  
    }
}
