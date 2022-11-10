import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {
  CommentComponent,
  CommentsComponent, CommentsDetailsComponent, HeaderComponent, MainLayoutComponent,
  PostComponent,
  PostsComponent, PostsDetailsComponent,
  UserComponent, UserDetailsComponent,
  UsersComponent
} from "./components";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      // {path:'', redirectTo:'users', pathMatch:'full'},
      {path: 'users', component: UsersComponent, children:[
          {path:':id', component:UserDetailsComponent}
        ]},
      {path: 'posts', component: PostsComponent, children:[
          {path: ':id', component: PostsDetailsComponent}
        ]},
      {path: 'comments', component: CommentsComponent, children:[
          {path: ':id', component: CommentsDetailsComponent}
        ]}

    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,
    CommentComponent,
    CommentsComponent,
    HeaderComponent,
    MainLayoutComponent,
    UserDetailsComponent,
    CommentsDetailsComponent,
    PostsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
