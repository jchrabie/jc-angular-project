import { AfterViewInit, Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]',
})
export class LazyLoadDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='; // (1)
  @Input() src: string; // (2)

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage(); // (3)
  }

  /**
   * (4)
   */
  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  /**
   * (5)
   */
  private lazyLoadImage() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  /**
   * (6)
   */
  private loadImage() {
    this.srcAttr = this.src;
  }
}
