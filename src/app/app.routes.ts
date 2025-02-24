import { Routes,RouterModule } from '@angular/router';
import {NgModule} from '@angular/core'
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {path:'',component:UsersComponent},
    {path:'Create',component:CreateComponent},
    {path:'Edit/:id',component:EditComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

