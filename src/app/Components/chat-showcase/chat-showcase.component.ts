import { Component, OnInit, Input } from '@angular/core';
import { ChatShowcaseService } from '../../Service/chat-showcase.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-showcase',
  templateUrl: './chat-showcase.component.html',
  providers: [ ChatShowcaseService ],
  styles: [],
})

export class ChatShowcaseComponent implements OnInit {

  constructor(private dataService : ChatShowcaseService) {
    
  }


  ngOnInit(): void {
  }
  
  @Input() activeRoute: any;
  @Input() myname: string;
  newmessage = new FormControl('');
  sendMessage(){
    this.dataService.emit('sendMessage',
    {sndr : this.myname,rcvr : this.activeRoute.name, chat : this.newmessage.value});
    this.newmessage.reset();
  }

}
