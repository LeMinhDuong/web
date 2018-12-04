import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// duong add new component
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Kiem Tien Online'} },
  { path: 'home', component: HomeComponent, data: { title: 'Kiem Tien Online'} },
  { path: 'admin', component: AdminComponent, children: [], data: { title: 'Kiem Tien Online'} },
  { path: 'demo', component: DemoComponent, data: { title: 'Kiem Tien Online'}},
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
    AdminComponent,
    MobileMenuComponent
  ],
  imports: [
	HttpClientModule,
	HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
	FormsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
