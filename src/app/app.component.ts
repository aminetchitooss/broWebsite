import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'broWebSite';
  list = [
    { src: 'assets/images/DSC1.JPG', tag: 'Awedii' },
    { src: 'assets/images/DSC2.JPG', tag: 'ki fernes' },
    { src: 'assets/images/DSC3.JPG', tag: 'شكرا سيادة المدير' },
    { src: 'assets/images/DSC5.JPG', tag: 'oulahta nsit' },
    { src: 'assets/images/DSC6.JPG', tag: 'hada malo' },
    { src: 'assets/images/DSC8.JPG', tag: 'حوايج العيد' },
    { src: 'assets/images/DSC9.JPG', tag: 'Jacket dyal Amine' },
    { src: 'assets/images/DSC10.JPG', tag: 'Nadi canadi' },
  ];
}
