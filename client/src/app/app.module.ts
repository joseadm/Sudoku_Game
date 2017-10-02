import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { UserEditComponent } from './components/user-edit.component'
import { SudokuComponent } from './components/sudoku.component'

@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
