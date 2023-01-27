import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site-projeto';
  public link1!: string;
  public link2!: string;
  public link3!: string;

  ngOnInit() {
    this.link1 = 'Home'
    this.link2 = 'Projetos'
    this.link3 = 'Sobre'
  }
}
