import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FleurComponent } from './fleur/fleur.component';
import { FleurNewComponent } from './fleur/fleur-new/fleur-new.component';
import { FleurListComponent } from './fleur/fleur-list/fleur-list.component';
import { FleurEditComponent } from './fleur/fleur-edit/fleur-edit.component'

import { FleurService } from './fleur/fleur.service';
import { MaxnumberlengthValidator } from './app-directives/maxnumberlength-validator.directive';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { FleursDatabaseService } from './fleurs-database.service';


@NgModule({
  declarations: [
    AppComponent,
    FleurComponent,
    FleurNewComponent,
    FleurListComponent,
    FleurEditComponent,
    MaxnumberlengthValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(FleursDatabaseService),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [FleurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
