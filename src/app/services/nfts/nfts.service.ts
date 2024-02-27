import { Injectable } from '@angular/core';
import { NftInterface } from 'src/app/interfaces/NftInterface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NftsService {
  private nft_routeAPI = environment.API_URL + 'core_nfts/';
  nftPullSave: NftInterface[] = [];

  private nftPull = new BehaviorSubject<NftInterface[]>([]);
  nftPullServe$ = this.nftPull.asObservable();

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.http.get<any>(this.nft_routeAPI).subscribe(
      (data) => {
        this.nftPull.next(data.results);
        this.nftPullSave = data.results;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  getNftData(): Observable<NftInterface[]> {
    return this.nftPullServe$;
  }

  searchNft(term: string): void {
    if (!term.trim()) {
      this.nftPull.next(this.nftPullSave);
    }

    const data_on_search = this.nftPullSave.filter((i) =>
      i.title.includes(term)
    );
    this.nftPull.next(data_on_search);
  }
}
