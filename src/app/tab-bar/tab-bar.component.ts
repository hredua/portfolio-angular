import { Component } from '@angular/core';

@Component({
  selector: 'tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent {

  downloadFile(){
   let ok=confirm('Deseja baixar meu currículo?')
   if (ok==true) {
    let link = document.createElement("a");
    link.download = "Currículo-Helamã";
    link.href = "assets/misc/curriculo.pdf";
    link.click();
   }

}
}
