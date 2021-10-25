import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  id:any;

  constructor() {
  }

  ngOnInit(): void { 
    this.id = 1;
  }

  addClass(id: any) {
    this.id = id;
}

}
