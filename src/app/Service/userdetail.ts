import { Time } from '@angular/common';


export class friendData{
    name :string;
    messages : Array<{sndr : string,rcvr : string, chat : string}>;
    lastmessage : {sndr : string,rcvr : string, chat : string};
    constructor(name: string){
        this.name = name;
        this.messages = []
        this.lastmessage = {sndr:'',rcvr:'',chat:''}
    }
}

export interface IFrienddetail{
    name :string;
    messages : Array<{sndr : string,rcvr : string, chat : string}>;
    lastmessage : {sndr : string,rcvr : string, chat : string}
}