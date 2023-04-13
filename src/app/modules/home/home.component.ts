import { Component } from '@angular/core';
import { MenuNameService } from 'src/app/core/services/data-sharing/menu-name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchInput = '';
  menuAdminName = 'Admin';

  constructor(
    private menuNameService: MenuNameService
  ){}

  ngOnInit(): void {
    this.menuNameService.menuName.subscribe(
      (datas) => {
        this.menuAdminName = datas.menuAdminName;
      }
    )
  }

}
