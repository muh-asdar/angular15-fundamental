import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuNameService {

  private menuNameDatas = new BehaviorSubject({
    menuAdminName: 'Admin'
  })

  menuName = this.menuNameDatas.asObservable();

  constructor() { }

  setMenuNameDatas(msg:any){
    this.menuNameDatas.next(msg);
  }

}
