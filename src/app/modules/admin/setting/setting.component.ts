import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  @Output() dataEventEmit = new EventEmitter<string>();

  menuNameInput= new FormControl('', [Validators.required]);

  setDataEmit() {
    this.dataEventEmit.emit(this.menuNameInput.value ? this.menuNameInput.value : '') ;
  }
}
