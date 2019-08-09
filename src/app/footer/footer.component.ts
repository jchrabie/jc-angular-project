import { Component, OnInit } from '@angular/core';
import Social from '../../model/social';
import { RestService } from '../shared/service/rest.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private socialsResp: Social[];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getSocials().subscribe(res => this.socialsResp = res.map(social => <Social>social));
  }

  get socials(): Social[] {
    return this.socialsResp;
  }
}
