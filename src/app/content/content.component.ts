import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  parallaxOffset: number = 0;
  parallax2Offset: number = 0;
  safeHelloMessage!: SafeHtml;

  constructor(private translate: TranslateService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadTranslation();
  }

  switchLanguage(language: string) {
    this.translate.use(language).subscribe(() => {
      this.loadTranslation();
    });
  }

  loadTranslation() {
    this.translate.get('hello_message').subscribe((res: string) => {
      this.safeHelloMessage = this.sanitizer.bypassSecurityTrustHtml(res);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.parallaxOffset = window.pageYOffset * 0.4;
    this.parallax2Offset = window.pageYOffset * 0.1;
  }
}
