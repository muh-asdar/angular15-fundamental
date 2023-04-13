import { Component, EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonColor:'primary'|'accent'|'warn' = 'primary';
  @Output() buttonClicked = new EventEmitter<string>();

  onClicked(){
    this.buttonClicked.emit('isClicked');
  }

}
