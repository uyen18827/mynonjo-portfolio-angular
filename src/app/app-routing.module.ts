import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommissionGuideComponent } from './pages/commission-guide/commission-guide.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    // children: [
    //   {
    //     path: '/commission-guide',
    //     component: CommissionGuideComponent
    //   }
    // ]
  },
  {
    path: 'commission-guide',
    component: CommissionGuideComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
