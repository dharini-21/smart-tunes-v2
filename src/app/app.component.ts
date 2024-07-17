import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smart-tunes-v2';
  color="#fff"
  @HostListener('touchmove', ['$event'])
  handleSwipe(event:any){
    let touch = event.touches[0] || event.changedTouches[0];
    console.log(touch.pageX,touch.pageY);

  }
  // @HostListener('onmouseover', ['$event'])
  hover(event:any){
    console.log(event);
    var target = event.target || event.srcElement
    target.style.backgroundColor=this.getRandomColor();
    event.stopPropagation()
  }


  counter(i: number) {
    console.log(i)
    return new Array(i);
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }
}
