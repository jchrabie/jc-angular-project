import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

class MetaTag {
    name: string;
    property: string;
    value: string;

    constructor(name: string, property: string, value: string) {
        this.name = name;
        this.property = property;
        this.value = value;
    }
}

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private urlMeta: string = 'url';
  private titleMeta: string = 'title';
  private descriptionMeta: string = 'description';
  private imageMeta: string = 'image';

  constructor(private titleService: Title, private metaService: Meta) { }

  public setTitle(title: string): void {
    this.titleService.setTitle(`Joël CHRABIE | ${title}`);
  }

  public setSocialMediaTags(url: string, title: string, description: string, image: string): void {
    const tags = [
      new MetaTag(this.urlMeta, `og:${this.urlMeta}`, `https://www.joelchrabie.com${url}`),
      new MetaTag(this.titleMeta, `og:${this.titleMeta}`, `Joël CHRABIE | ${title}`),
      new MetaTag(this.descriptionMeta, `og:${this.descriptionMeta}`, description),
      new MetaTag(this.imageMeta, `og:${this.imageMeta}`, image),
    ];

    this.setTags(tags);
    this.setTitle(title);
  }

  private setTags(tags: MetaTag[]): void {
    tags.forEach(siteTag => this.metaService.updateTag({ name: siteTag.name, property: siteTag.property, content: siteTag.value }));
  }
}
