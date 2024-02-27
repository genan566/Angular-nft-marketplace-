import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NftInterface } from 'src/app/interfaces/NftInterface';
import { NftsService } from 'src/app/services/nfts/nfts.service';

@Component({
  selector: 'app-list-nfts',
  templateUrl: './list-nfts.component.html',
  styleUrls: ['./list-nfts.component.scss'],
})
export class ListNftsComponent implements OnInit {
  nfts_data: NftInterface[] = [];
  dataIsLoaded: boolean = false;

  constructor(private router: Router, private nft_service: NftsService) {}

  ngOnInit(): void {
    this.getNFTsData();
  }

  getNFTsData(): void {
    this.nft_service.nftPullServe$.subscribe((data) => {
      this.nfts_data = data;
      this.dataIsLoaded = true;
    });
  }

  navigateToDetails(currentNFT: NftInterface) {
    this.router.navigate(['/nft-details', currentNFT.id]);
  }
}
