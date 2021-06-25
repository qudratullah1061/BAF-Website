import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from '@homepage/homepage.module';
import { CollectionModule } from '@collections/collection.module';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { SharedModule } from '@shared/shared.module';
import { StoriesModule } from '@stories/stories.module';
import { AboutModule } from '@about/about.module';
import { ContactModule } from '@contact/contact.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CollectionModule,
    HomepageModule,
    StoriesModule,
    AboutModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
