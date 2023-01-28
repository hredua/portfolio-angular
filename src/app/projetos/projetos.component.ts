import { Component} from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {

  public website!:String
  public github!:String
  public breve!:String
  public api!:String

  ngOnInit() {
    this.website = 'Website'
    this.github = 'Github'
    this.breve = 'Aguarde'
    this.api = 'API'
  }

}
