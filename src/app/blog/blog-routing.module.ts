import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { BlogComponent } from './blog.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '', component: BlogComponent,
    children: [
      { path: '', redirectTo: 'articles', pathMatch: 'full'},
      // { path: 'articles', component: ArticlesComponent },
      { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
      { path: 'projects', component: ProjectsComponent },    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
