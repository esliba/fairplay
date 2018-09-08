import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OpinionsComponent } from './opinions/opinions.component';
import { NewsComponent } from './news/news.component';
import { UsersOpinionsComponent } from './users-opinions/users-opinions.component';
import { SingleNewComponent } from './news/single-new/single-new.component';
import { SingleOpinionComponent } from './opinions/single-opinion/single-opinion.component';
import { SingleUserOpinionComponent } from './users-opinions/single-user-opinion/single-user-opinion.component';
import { MatchsTableComponent } from './tables/matchs-table/matchs-table.component';
import { PositionsTableComponent } from './tables/positions-table/positions-table.component';
import { StrikersTableComponent } from './tables/strikers-table/strikers-table.component';
import { RelegationsTableComponent } from './tables/relegations-table/relegations-table.component';
import { NewListElementComponent } from './news/new-list-element/new-list-element.component';
import { OpinionListElementComponent } from './opinions/opinion-list-element/opinion-list-element.component';
import { UserOpinionListElementComponent } from './users-opinions/user-opinion-list-element/user-opinion-list-element.component';
import { NavigateNewComponent } from './news/navigate-new/navigate-new.component';
import { NavigateOpinionComponent } from './opinions/navigate-opinion/navigate-opinion.component';
import { NavigateUserOpinionComponent } from './users-opinions/navigate-user-opinion/navigate-user-opinion.component';
import { JournalistComponent } from './about-us/journalist/journalist.component';

import { NewsServices} from './shared/services/news.services';
import { OpinionsServices} from './shared/services/opinions.services';
import { UserOpinionsServices} from './shared/services/user-opinions.service';
import { JournalistsServices } from './shared/services/journalists.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    OpinionsComponent,
    NewsComponent,
    UsersOpinionsComponent,
    SingleNewComponent,
    SingleOpinionComponent,
    SingleUserOpinionComponent,
    MatchsTableComponent,
    PositionsTableComponent,
    StrikersTableComponent,
    RelegationsTableComponent,
    NewListElementComponent,
    OpinionListElementComponent,
    UserOpinionListElementComponent,
    NavigateNewComponent,
    NavigateOpinionComponent,
    NavigateUserOpinionComponent,
    JournalistComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    NewsServices,
    OpinionsServices,
    UserOpinionsServices,
    JournalistsServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
