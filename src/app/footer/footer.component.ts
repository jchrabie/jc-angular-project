import { Component, OnInit } from '@angular/core';
import Social from '../../model/social';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private socials: Social[];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getSocials().subscribe(res => {
      this.socials = res.map(social => <Social>social);
      console.log(this.socials);
    });
  }

  getSocials(): Social[] {
    return this.socials;
  }

}
