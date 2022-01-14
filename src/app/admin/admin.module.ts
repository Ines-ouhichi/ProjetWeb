import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AdminComponent} from 'src/app/admin/admin/admin.component';
import {SessionItemComponent} from'src/app/admin/session-item/session-item.component';
import {SessionItemListComponent} from 'src/app/admin/session-item-list/session-item- list.component';
import {SessionAddFormComponent} from 'src/app/admin/session-add-form/session-add-form.component';
import {SessionEditFormComponent} from 'src/app/admin/session-edit-form/session-edit-form.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const adminRoutes: Routes = [
{
path: '',
component: AdminComponent,
children: [
    { path: 'add', component: SessionAddFormComponent },
    { path: 'edit/:id', component:SessionEditFormComponent },
    { path: 'list', component: SessionItemListComponent},
{ path: '', redirectTo: 'list', pathMatch: 'full' }
],
}
];

@NgModule({
imports: [RouterModule.forChild(adminRoutes),
          CommonModule,
          FormsModule],
declarations: [SessionItemComponent,
              SessionItemListComponent,
              AdminComponent,
              SessionAddFormComponent,
              SessionEditFormComponent],
providers: [],
bootstrap: [AdminComponent]
})

export class AdminModule { }
