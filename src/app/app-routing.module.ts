import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CoursesdataComponent } from './coursesdata/coursesdata.component';
import { FirstformComponent } from './firstform/firstform.component';
import { HeaderComponent } from './header/header.component';
import { HerodataComponent } from './herodata/herodata.component';
import { HeronameComponent } from './heroname/heroname.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { SecondformComponent } from './secondform/secondform.component';
import { VivekComponent } from './vivek/vivek.component';

const routes: Routes = [
  {path:'',redirectTo:'/secondform',pathMatch:'full'},
  {path:'firstform',component:FirstformComponent},
  {path:'secondform',component:SecondformComponent},
  {path:'courses',component:CourselistComponent},
  {path:'coursesdata/:id',component:CoursesdataComponent},
  {path:'heroname',component:HeronameComponent},
  {path:'herodata/:name',component:HerodataComponent},
  {path:'header',component:HeaderComponent},
  {path:'vivek',component:VivekComponent},

  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings=[
                 FirstformComponent,
                 SecondformComponent,
                 PageNotFoundComponent,
                 CourselistComponent,
                 CoursesdataComponent,
                 HeronameComponent,
                 HerodataComponent,
                 HeaderComponent,
                 VivekComponent
];


