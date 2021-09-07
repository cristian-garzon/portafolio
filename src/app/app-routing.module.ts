import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { FullPageComponent } from './components/full-page/full-page.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'fullPage'},
  {path: 'curriculum', component:CurriculumComponent},
  {path: 'fullPage', component:FullPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
