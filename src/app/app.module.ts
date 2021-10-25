import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule, CollapseModule, WavesModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChatShowcaseComponent } from './Components/chat-showcase/chat-showcase.component';
import { ChatShowcaseService } from './Service/chat-showcase.service';
import { ChatListComponent } from './Components/chat-list/chat-list.component';
import { NotexistComponent } from './notexist/notexist.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OnlinelistComponent } from './Components/onlinelist/onlinelist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatShowcaseComponent,
    ChatListComponent,
    NotexistComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    OnlinelistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    CollapseModule,
    WavesModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ChatShowcaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
