import { Component } from "@angular/core";

@Component({
    selector: 'data-binding',
    templateUrl: './dataBinding.component.html'
})
export class DataBinding{
    serverId = 10 ;
    serverStatus = 'offline';
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'Testing Server';

    constructor(){
        setTimeout(()=>{
            this.allowNewServer =true;
        },2000);
    }

    getServerStatus(){
        return this.serverStatus;
    }

    onCreateServer(){
        this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement> event.target).value;

    }
}