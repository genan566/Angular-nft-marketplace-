import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NftInterface } from 'src/app/interfaces/NftInterface';
import { NftsService } from 'src/app/services/nfts/nfts.service';

@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.scss'],
})
export class NftDetailComponent implements OnInit {
  currentNFT: NftInterface | undefined;
  constructor(
    private location: Location,
    private nftPull: NftsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getNFT();
  }

  getNFT(): void {
    const nftId = this.route.snapshot.paramMap.get('id');
    this.nftPull.nftPullServe$.subscribe((data) => {
      let resData = data.find((i) => i.id === Number(nftId));
      this.currentNFT = resData;
    });

  }

  goBack(): void {
    this.location.back();
  }
}
