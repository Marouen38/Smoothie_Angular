import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() smoothie;
  private _title;
  constructor() { }

  ngOnInit() {
    this.title =('Bienvenue sur  smoothies en folie');

    this.smoothie='super smoothie bleu à la banane';
  }
 
  
    set title(v : string) {
    this._title= v;
  }
  
  public get titte() : string {
    return this._title;
  }
  
  
}
