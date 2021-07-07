import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from '@homepage/homepage.module';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthModule } from '@auth/auth.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
