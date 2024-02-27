import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CategoriesTrendingInterface } from 'src/app/interfaces/CategoriesTrending';
import { NftCategoriesService } from 'src/app/services/nft-categories/nft-categories.service';
import { NftsService } from 'src/app/services/nfts/nfts.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit {
  categories_trending_data: CategoriesTrendingInterface[] = [];
  dataIsLoaded: boolean = false;
  private searchTerms = new Subject<string>();
  constructor(
    private router: Router,
    private categories_trending: NftCategoriesService,
    private nft_service: NftsService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  search(term: string): void {
    this.searchTerms.next(term);
    this.nft_service.searchNft(term);

    console.log('dflgff', term);
    // .subscribe((res) => this.nft_service.s);
  }

  getCategories(): void {
    this.categories_trending
      .getCategoriesTrending()
      .subscribe((categoriesData) => {
        this.categories_trending_data = categoriesData;
        this.dataIsLoaded = true;
        this.categories_trending.setCategoriesTrending(categoriesData);
      });
  }
}
