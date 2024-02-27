import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CategoriesTrendingInterface } from 'src/app/interfaces/CategoriesTrending';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NftCategoriesService {
  private nftRouteAPI = environment.API_URL; // URL to web api
  private categories_routeAPI = environment.API_URL + "categories_trending/"; // URL to web api
  categoriesNFT: CategoriesTrendingInterface[] = [];

  constructor(private http: HttpClient) {}

  getCategoriesTrending(): Observable<CategoriesTrendingInterface[]> {
    return this.http.get<any>(this.categories_routeAPI).pipe(
      map((n) => n.results),
      catchError(
        this.handleError<CategoriesTrendingInterface[]>(
          'get Categories Trending Failed',
          []
        )
      )
    );
  }

  setCategoriesTrending(data: CategoriesTrendingInterface[]): void {
    this.categoriesNFT = data;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
