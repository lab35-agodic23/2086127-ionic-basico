import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';



@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(public photoService: FotoServiceService) { }

  ngOnInit() {}


  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}


