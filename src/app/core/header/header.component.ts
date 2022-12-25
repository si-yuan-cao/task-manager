import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  openSidebar() {
    this.toggle.emit();
  }

  onChange(matSlideToggleChange: MatSlideToggleChange) {
    this.toggleDarkTheme.emit(matSlideToggleChange.checked);
  }
}
