import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpSupportComponent } from './shared/help-support/help-support.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpSupportComponent,
  ],
  imports: [
    MarkdownModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
