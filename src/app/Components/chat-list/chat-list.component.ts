import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChatShowcaseService } from '../../Service/chat-showcase.service';
import { FormControl } from '@angular/forms';
import { friendData } from '../../Service/userdetail';
import { ModalDirective, ModalModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit, AfterViewInit {

  newname = new FormControl('');
  newfriend = new FormControl('');
  myname: any;
  friends = [];

  constructor(private dataService: ChatShowcaseService) {
    this.dataService.myname.subscribe(name => this.myname = name);
    this.dataService.friends.subscribe(data => this.friends = data);
  }

  // @ViewChild('changeModal') changeModel:ModalDirective;
  ngAfterViewInit() {
    // this.changeModel.show();
  }

  ngOnInit() {
    this.dataService.listen('updateName').subscribe((data) => this.updateName(data));
    this.dataService.listen('joinChat').subscribe((data) => this.joinChat(data));
  }

  updateName(data: any) {
    if (!data) return;
    else if (data.response) {
      console.log(data.username, " is your new user name");
      this.myname = data.username
    } else {
      alert('User name already in use choose someother');
      console.log("username already in use");
    }
  }

  addFriend() {
    this.dataService.addFriend(this.newfriend.value);
    this.newfriend.reset();
  }

  joinChat(data: any) {
    var ifpresent = this.friends.find(friend => friend.name === data.friendname)
    if (!ifpresent) {
      var temp = new friendData(data.friendname);
      this.friends.push(temp)
    }
  }

  routedChild = { name: '' };
  changeChild(friend: any) {
    this.routedChild = friend;
  }

  updateMessage(data: any) {
    if (!data) return;
    for (var i = 0; i < this.friends.length; i++) {
      if (this.friends[i].name === data.rcvr) {
        this.friends[i].messages.push(data);
        this.friends[i].lastmessage = data;
        return
      }
      else if (this.friends[i].name === data.sndr) {
        this.friends[i].messages.push(data);
        this.friends[i].lastmessage = data;
        return
      }
    }
  }
}