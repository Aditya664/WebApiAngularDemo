import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClient:HttpClient){}
  public getAnimalChan(){
    return this.HttpClient.get('https://animechan.vercel.app/api/quotes/anime?title=naruto');
  }
}
