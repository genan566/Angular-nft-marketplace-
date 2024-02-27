import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NftDetailComponent } from './pages/nft-detail/nft-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { ListNftsComponent } from './components/list-nfts/list-nfts.component';
import { CategorieNamePipe } from './customPipes/categorieTrending.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NftDetailComponent,
    HomeComponent,
    NotFoundComponent,
    ListCategoriesComponent,
    ListNftsComponent,

    CategorieNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
