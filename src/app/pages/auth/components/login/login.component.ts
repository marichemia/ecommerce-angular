import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { AuthService, CartService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  sub$ = new Subject();
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService) { }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }

  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return


    this.authService.login(this.form.value)
      .pipe(
        takeUntil(this.sub$),
        tap(() => {
          this.cartService.getCart().subscribe()
        })
      )
      .subscribe(res => {
        console.log(res)

        this.router.navigate(['/'])
      })


  }
}
