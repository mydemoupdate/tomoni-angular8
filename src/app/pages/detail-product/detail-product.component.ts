import { Component, OnInit } from '@angular/core';
import { DetailProductService } from 'src/app/service/detail-product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  statusSlides =1;
  product = new Product();
  images = [];
  constructor(private detailProductService: DetailProductService) { }

  ngOnInit() {
    this.showSlides(this.statusSlides);
    this.detailProductService.getAll().subscribe((data=>{
      var data = data.ResultSet.Result || {};
      this.product= data;
      this.product.Time  = new Date(new Date(this.product.EndTime).getTime()- new Date().getTime()).getDate()-1;
      for (var key in data.Img) {
        this.images.push([data.Img[key]]);
      }
    }));
  }
  plusSlides(n) {
    this.showSlides(this.statusSlides + n);
  }
  showSlides(n) {
    this.statusSlides = n;
  }
}
