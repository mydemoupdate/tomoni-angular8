import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {
  selectActive = [1];
  currents = 1;

  ngOnInit() {
    
  }
  onSelect(select: number): void {
    this.currents = select;
    const position = this.selectActive.indexOf(select);
    if (position === -1) {
      this.selectActive.push(select);
    } 
}
}
