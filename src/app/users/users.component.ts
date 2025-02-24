import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../helpers/LocalStorage';
import {User} from '../Model/user';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  imports: [RouterModule,CommonModule],
  templateUrl: './users.component.html',
  styles:[]
})
export class UsersComponent implements OnInit {
  users: User[] |undefined;
  storage : LocalStorage;
  constructor() {
    this.storage = new LocalStorage();
    this.users = this.storage.Get('users');
}
DeleteUser(id: number, name: string) {
  if(confirm(`Do you want to delete user "${name}"?`) && this.users ){
    let index = this.users.findIndex(x => x.UserId == id);
    if (index>-1) {
      this.users.splice(index, 1);
      this.storage.Set('users', this.users);
      alert(`this usert "${name}" has been deleted successfully.`);
    }
  }
}
ngOnInit(): void {
    
}
}
