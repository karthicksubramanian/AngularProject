import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsvComponent } from './csv/csv.component';
import { ResultViewComponent } from './result-view/result-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'csv', pathMatch: 'full' },
  {
    path: 'csv', component: CsvComponent, children: [
      { path: 'resultview', component: ResultViewComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
