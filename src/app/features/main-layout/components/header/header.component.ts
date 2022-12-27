
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, CartService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount$: Observable<number> = this.cartService.cartCount$;

  get userIsAuthenticated() {
    return this.authService.token;
  }

  get user() {
    return this.authService.user;
  }

  signOut() {
    this.authService.signOut();
  }

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
