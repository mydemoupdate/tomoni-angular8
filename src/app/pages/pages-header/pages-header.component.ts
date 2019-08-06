import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.css']
})
export class PagesHeaderComponent implements OnInit {
    private toggle : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  clickEvent(event){
    this.toggle = !this.toggle;     
 }
}
