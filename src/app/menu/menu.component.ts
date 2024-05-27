import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.use(language);
    console.log('click funciona');
  }
}
