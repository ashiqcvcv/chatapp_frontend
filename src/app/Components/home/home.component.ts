import { Component, OnInit } from '@angular/core';
import { ChatShowcaseService } from '../../Service/chat-showcase.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: ChatShowcaseService) {
    this.dataService.myname.subscribe(name => this.myname = name);
  }

  myname: any;
  newname = new FormControl('');
  ngOnInit(): void {
  }

  changeName() {
    this.dataService.changeName(this.newname.value);
    this.dataService.emit('create', [this.newname.value, this.dataService.socket.id]);
  }

  updateName(data: any) {
    if (!data) return;
    else if (data.response) {
      console.log(data.username, "is your new user name");
      this.myname = data.username
    } else {
      console.log("username already in use");
    }
  }

}
