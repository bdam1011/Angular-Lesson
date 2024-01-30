import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',//不只能用 tag
  //selector: '[app-servers]', //還可以用 attribute 當成 selector
  selector: '.app-servers', //亦可以用 class 當成 selector
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
}) 
export class ServersComponent {

}
