import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles:[
    `.online {
      color: white;
    }`
  ]
})
export class DirectiveComponent {
  serverCreationStatus: string = 'No Server was created!';
  serverCreated = false;
  serverName = 'DirectiveTestServer';
  serverStatus: string = 'offline';
  servers=['TestingServer1','TestingServer2'];

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }

  onCreateServe(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline'
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
  }

  getColor(index: number){
    return index % 2 === 1 ? 'green': 'red';
  }
}
