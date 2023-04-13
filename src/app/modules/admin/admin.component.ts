import { Component, OnInit } from '@angular/core';
import { MenuNameService } from 'src/app/core/services/data-sharing/menu-name.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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

  setMenuName(value: string) {
    this.menuAdminName = value;

    this.menuNameService.setMenuNameDatas({
      menuAdminName: value
    });

  }
}
