import { Component, OnInit } from '@angular/core';
import { GetHiredService } from '../get-hired-registration/service/get-hired.service';

import * as $ from 'jquery';
window['$'] = window['jQuery'] = $;

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.scss']
})
export class AvatarUploadComponent implements OnInit {

  selectedFiles: FileList;
  imageBase64: string;
  imageError: string;
  searchText;
  isImageLoaded: boolean = false;
  constructor(private getHiredService: GetHiredService) { }

  ngOnInit() {
  }

  validateFile(files): boolean {
    let file = files[0];
    let subString = file.name.split(".");
    let fileExtension = subString[subString.length - 1];
    //@Image size in MB,
    let fileSize = (((file.size) / 1024) / 1024).toFixed(2);
    if (['jpg', 'jpeg', 'png'].indexOf(fileExtension.toLowerCase()) > -1) {
      if (parseFloat(fileSize) <= 2) {
        return true;
      } else {
        this.imageError = "Image file is too small";
        return false;
      }
    } else {
      this.imageError = "Image format wrong.";
      return false;
    }
  }


  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.imageError = '';
      this.imageError = "";
      this.imageBase64 = "";
      if (this.validateFile(event.target.files)) {
        let file = event.target.files[0];
        //remove this
        this.getProfileImage(event.target);
        Promise.resolve(this.getHiredService.updateProfileImage(file))
          .then(resp => {
            if (resp && resp["status"] === "SUCCESS") {
              this.isImageLoaded = false;
              this.getProfileImage(event);
            }
            else {
              this.imageError = resp['errors']['profile_pic_image_required'];
              this.isImageLoaded = false;
            }
          });

      };

    }
  }

  getProfileImage(input) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreview').css('background-image', 'url(' + e.target["result"] + ')');
      $('#imagePreview').hide();
      $('#imagePreview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
    Promise.resolve(this.getHiredService.getProfileImage()).then(resp => {
      if (resp && resp["status"] === "SUCCESS") {
        let data = resp['documentType']
        if (data) {
          this.imageBase64 = data.fileData;
        } else {
          this.imageBase64 = '';
        }
      }
    })
  }

}
