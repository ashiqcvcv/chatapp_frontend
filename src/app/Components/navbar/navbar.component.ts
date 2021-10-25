import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatShowcaseService } from 'src/app/Service/chat-showcase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mobile: boolean;
  constructor(private dataService : ChatShowcaseService) {
    this.dataService.onNewMessage().subscribe(data => {});
   }

  navitems = [
    {
      name: 'Home', link: '/home'
    }, {
      name: 'Chat', link: '/chat'
    },{
      name: 'Online List', link: '/list'
    }
  ]

  ngOnInit() {
    if (window.screen.width < 1536) { // 768px portrait
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

}
