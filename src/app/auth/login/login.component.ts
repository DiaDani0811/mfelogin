import { AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
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