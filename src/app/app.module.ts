import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// duong add new component
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Kiem Tien Online'} },
  { path: 'home', component: HomeComponent, data: { title: 'Kiem Tien Online'} },
  { path: 'admin', component: AdminComponent, children: [] },
  { path: '',
    redirectTo: '',
    pathMatch: 'full',
    data: { title: 'Kiem Tien Online'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
