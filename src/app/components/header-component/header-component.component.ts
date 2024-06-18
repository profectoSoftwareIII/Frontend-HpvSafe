import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponentComponent {
  @Input()
  public titulo: string = '';
}
