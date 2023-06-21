import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  downloadFile(){
    let ok=confirm('Deseja baixar meu currículo?')
    if (ok==true) {
     let link = document.createElement("a");
     link.download = "Currículo Helamã Rédua";
     link.href = "assets/misc/curriculo.pdf";
     link.click();
    }
 }

  title = 'site-projeto';
  public link1!: string;
  public link2!: string;
  public link3!: string;
  public link4!: string;

  ngOnInit() {
    this.link1 = 'Home'
    this.link2 = 'Projetos'
    this.link3 = 'Sobre'
    this.link4 = 'Baixar Currículo'
    //Alterando comportamento da pagina levando ao topo cada rota//
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0,3)
    })
  }
}
