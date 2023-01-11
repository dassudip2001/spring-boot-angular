import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBerComponent } from './component/nav-ber/nav-ber.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './component/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './component/table/table.component';
import { ButtenComponent } from './component/butten/butten.component';
import {MatButtonModule} from '@angular/material/button';
import { ModelComponent } from './component/model/model.component';
import { DeleteButtanComponent } from './component/delete-buttan/delete-buttan.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBerComponent,
    HomeComponent,
    TableComponent,
    ButtenComponent,
    ModelComponent,
    DeleteButtanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
