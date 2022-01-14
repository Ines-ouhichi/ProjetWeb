import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SessionItemComponent } from './session-item/session-item.component';
import {SessionItemListComponent } from 'src/app/session-item-list/session-item- list.component';
import { FakeSessionItemService } from 'src/app/admin/fake-session-item.service';
import { RouterModule,Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const appRoutes: Routes = [
  {
  path: 'list',
  component: SessionItemListComponent},
  {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    PagenotfoundComponent,
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [FakeSessionItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
