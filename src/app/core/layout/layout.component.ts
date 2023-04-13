import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(
    private router: Router,
  ){}

  logoutClicked() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
