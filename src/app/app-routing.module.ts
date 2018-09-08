import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { OpinionsComponent } from './opinions/opinions.component';
import { UsersOpinionsComponent } from './users-opinions/users-opinions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavigateNewComponent } from './news/navigate-new/navigate-new.component';
import { NavigateOpinionComponent } from './opinions/navigate-opinion/navigate-opinion.component';
import { NavigateUserOpinionComponent } from './users-opinions/navigate-user-opinion/navigate-user-opinion.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news/:id', component: NewsComponent },
  { path: 'new/:id', component: NavigateNewComponent },
  { path: 'opinions/:id', component: OpinionsComponent },
  { path: 'opinion/:id', component: NavigateOpinionComponent },
  { path: 'users-opinions/:id', component: UsersOpinionsComponent },
  { path: 'user-opinion/:id', component: NavigateUserOpinionComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
