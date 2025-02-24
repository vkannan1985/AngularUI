import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LocalStorage } from '../helpers/LocalStorage';
import { User } from '../Model/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [RouterModule, FormsModule],
  templateUrl: './create.component.html',
  styles: [],
})
export class CreateComponent implements OnInit {
  user: User;
  storage: LocalStorage;
  constructor(private router: Router) {
    this.storage = new LocalStorage();
    this.user = new User();
  }
  ngOnInit(): void {}

  SaveData() {
    if (localStorage.getItem('users') != null) {
      let data = localStorage.getItem('users');
      if (data != null) {
        const users = JSON.parse(data);
        users.push(this.user);
        this.storage.Set('users', users);
      }
    } else {
      const users = [];
      users.push(this.user);
      this.storage.Set('users', users);
    }
    this.router.navigate(['/']);
  }
}
