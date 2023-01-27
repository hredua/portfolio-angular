import { Component} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router,
  ){ }

  public iam!:String
  public textOne!:String
  public textTwo!:String
  public instagram!:String
  public linkedin!:String
  public github!:String
  public btn1!:String
  public btn2!:String

  ngOnInit() {
    this.iam = 'Oi, eu sou o Helamã Rédua'
    this.textOne = 'Sou dev front-end, estudo programação a 2 anos'
    this.textTwo = 'Minhas especialidades são criação de Websites, Apps, e SaaS '
    this.instagram = 'https://www.instagram.com/hrredua/'
    this.linkedin = 'https://www.linkedin.com/in/hredua/'
    this.github = 'https://github.com/hredua/'
    this.btn1 = 'Meus projetos'
    this.btn2 = 'Sobre mim'
  }

  goToSobre() {
    this.router.navigate(['/sobre'])
  }
  goToProjetos() {
    this.router.navigate(['/projeto'])
  }
}
