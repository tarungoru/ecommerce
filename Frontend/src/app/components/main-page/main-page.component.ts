import { AfterViewInit, Component} from '@angular/core';
import { mainPageCategories, products } from '../../data';
import { shopCategories } from '../../data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor() {
  }

  imageNames:string[] = ['snaks-image.jpg', 'namkeen-image.png', 'pickels-image.webp'];
currentImageIndex:number = 0;
  productCategories = products;
  shopCategories = mainPageCategories;
  intervalId!: number;

  ngOnInit(): void {
    this.startAutoSlide(); // run ONCE
  }

  startAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // safety
    }

    this.intervalId = window.setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageNames.length;
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.imageNames.length) % this.imageNames.length;
  }

  getImagePath(name:string): string {
    return `https://ik.imagekit.io/mywebsiteecommerce/${name}`;
  }


}

