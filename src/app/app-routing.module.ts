import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NftDetailComponent } from './pages/nft-detail/nft-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'nft-details/:id',
    component: NftDetailComponent,
    data: { animation: 'DetailsPage' },
  },
  { path: '**', component: NotFoundComponent, data: { animation: 'NotFound' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
