import { Component, OnInit } from '@angular/core';
import { LanguageService, LanguageEnum } from './language.service';

@Component({
  selector: 'app-content-mock',
  templateUrl: './content-mock.component.html',
  styleUrls: ['./content-mock.component.css']
})
export class ComponentMockComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  getGreeting(){
    if(this.languageService.currentLang==LanguageEnum.DE) {
      return 'Hallo';
    } else if(this.languageService.currentLang==LanguageEnum.IT) {
      return 'Ciao';
    } else {
      return 'Hi';
    }
  }

  ngOnInit(): void {
  }

}
