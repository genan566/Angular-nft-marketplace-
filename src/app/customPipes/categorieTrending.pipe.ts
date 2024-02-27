import { Pipe, PipeTransform } from '@angular/core';
import { CategoriesTrendingInterface } from '../interfaces/CategoriesTrending';
import { NftCategoriesService } from '../services/nft-categories/nft-categories.service';

@Pipe({
  name: 'categorieName',
})
export class CategorieNamePipe implements PipeTransform {
  constructor(private categoriesServices: NftCategoriesService) {}

  transform(value: number): string {
    if (value) {
      const categorie_found = this.categoriesServices.categoriesNFT.find(
        (ct) => ct.id === value
      );
      if (!categorie_found) {
        return 'Not Found';
      }
      return categorie_found.name;
    }

    return 'Non défini';
  }
}
