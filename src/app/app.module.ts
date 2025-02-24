import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, AppRoutingModule,AppComponent, UsersComponent, CreateComponent, EditComponent],
  providers: [],
  bootstrap: [],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]  
})
export class AppModule {}
