import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LocalStorage } from '../helpers/LocalStorage';
import { User } from '../Model/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  imports: [FormsModule, RouterModule],
  styles: [],
})
export class EditComponent implements OnInit {
  storage: LocalStorage;
  user: User | any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.storage = new LocalStorage();
    this.route.params.subscribe((params) => {
      let id = params['id'];
      const users: User[] = this.storage.Get('users');
      const existingUser = users.find((u) => u.UserId == id);
      if (existingUser != undefined) {
        this.user = Object.create(existingUser);
      }
    });
  }
  ngOnInit(): void {}
  SaveData() {
    let users: User[] = this.storage.Get('users');
    if (users != null) {
      for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (element.UserId == this.user.UserId) {
          users[i].name = this.user.name;
          users[i].city = this.user.city;
          break;
        }
      }
      this.storage.Set('users', users);
    }
    this.router.navigate(['/']);
  }
}
