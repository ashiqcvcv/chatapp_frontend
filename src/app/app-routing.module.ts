import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatListComponent } from './Components/chat-list/chat-list.component';
import { HomeComponent } from './Components/home/home.component';
import { NotexistComponent } from './notexist/notexist.component';
import { OnlinelistComponent } from './Components/onlinelist/onlinelist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'chat', component: ChatListComponent },
  { path: 'list', component: OnlinelistComponent },
  { path: ':**', component: NotexistComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
