import { NgModule } from '@angular/core';
import { UploadLibNehaComponent } from './upload-lib-neha.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadLibNehaComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [UploadLibNehaComponent]
})
export class UploadLibNehaModule { }
