import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Observable } from 'rxjs';
import {Weather} from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'review-http';
  // properties of this component
  weatherData = null;
  city: string ='';
  country: string = '';
  myWeather : Weather = new Weather('','','');

  constructor(private weatherService: WeatherService) { }

  ngOnInit():void {
    this.getWeather();
  }  


  getWeather() {
    this.weatherService.retrieveWeather(this.city,this.country).subscribe((data) => {
      this.weatherData = data;
      this.myWeather.description= this.weatherData.weather[0].description;
      this.myWeather.id= this.weatherData.weather[0].id;
      this.myWeather.main= this.weatherData.weather[0].main;
      console.log(this.weatherData.weather[0].description);
    });
  }

}
