import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber, BehaviorSubject, fromEvent } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatShowcaseService {
  socket: SocketIOClient.Socket;

  constructor(private http: HttpClient) {
    this.socket = io.connect('https://anonychatapp.herokuapp.com');
    // this.socket = io.connect('http://localhost:3000');
  }

  ngOnInit() {

  }

  public myNameSource = new BehaviorSubject('');
  myname = this.myNameSource.asObservable();

  public friendSource = new BehaviorSubject([]);
  friends = this.friendSource.asObservable();

  addFriend(newfriendName) {
    this.emit('joinOne', newfriendName);
  }
  getOnlineList() {
    return this.http.get('https://anonychatapp.herokuapp.com' + '/getOnlineList');
  }

  changeName(newn) {
    this.myNameSource.next(newn);
  }

  onNewMessage() {
    return new Observable(observer => {
      this.socket.on('updateMessage', data => {
        if (!data) return;
        var currentFriends = this.friendSource.getValue();
        for (var i = 0; i < currentFriends.length; i++) {
          if (currentFriends[i].name === data.rcvr) {
            currentFriends[i].messages.push(data);
            currentFriends[i].lastmessage = data;
            return
          }
          else if (currentFriends[i].name === data.sndr) {
            currentFriends[i].messages.push(data);
            currentFriends[i].lastmessage = data;
            return
          }
        }
        observer.next(currentFriends);
      });
    });
  }

  listen(eventname: string): Observable<any> {
    return new Observable((Subscriber) => {
      this.socket.on(eventname, (data) => {
        Subscriber.next(data);
      })
    })
  }

  emit(eventname: string, data: any) {
    this.socket.emit(eventname, data);
  }


}