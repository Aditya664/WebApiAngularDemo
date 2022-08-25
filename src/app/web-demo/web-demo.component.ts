import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-web-demo',
  templateUrl: './web-demo.component.html',
  styleUrls: ['./web-demo.component.css']
})
export class WebDemoComponent implements OnInit {

  animeData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAnimalChan().subscribe(data => {
      this.animeData = data;
      console.log(this.animeData)
    })
  }
}
