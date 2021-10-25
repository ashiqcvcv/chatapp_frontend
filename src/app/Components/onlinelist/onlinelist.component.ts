import { Component, OnInit } from '@angular/core';
import { ChatShowcaseService } from 'src/app/Service/chat-showcase.service';

@Component({
  selector: 'app-onlinelist',
  templateUrl: './onlinelist.component.html',
  styleUrls: ['./onlinelist.component.css']
})
export class OnlinelistComponent implements OnInit {

  constructor(private dataService: ChatShowcaseService) { }

  getOnlineList:any;

  ngOnInit(): void {
    this.dataService.getOnlineList().subscribe(data => {
      this.getOnlineList = data;
      console.log(data);
    })
  }


  renderOnlineList(data) {
    console.log(data);
  }
}
