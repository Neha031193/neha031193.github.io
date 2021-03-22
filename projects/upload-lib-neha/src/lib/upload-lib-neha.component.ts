import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbTooltip, NgbPopover, NgbModalRef, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'lib-upload-lib-neha',
  templateUrl: './upload-lib-neha.html',
  styleUrls: ['./upload-lib-neha.css']
})
export class UploadLibNehaComponent implements OnInit {


  files: any[];
  closeResult: string;
  @ViewChild('search') search: ElementRef;
  desc: any;
  currentFile: any;
  constructor(private modalService: NgbModal) {
    this.files = [];
  }
  ngOnInit(): void {
    // this.files.push({name: 'Neha'});
    // console.log(this.files);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  /**
  * on drop file
  */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * on browse file
   */
  fileBrowseHandler(files) {
    // console.log(files);
    this.prepareFilesList(files);
  }

  /**
   * on delete file
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  

  /**
   * add file to list
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      // item.progress = 0;
      // console.log(item);
      if (item.type === 'application/msword' ||
        item.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        item.type === 'image/jpg' ||
        item.type === 'image/jpeg' ||
        item.type === 'application/pdf' ||
        item.type === 'image/png') {
        if (item.size <= 2000000) {
          let isize = this.formatBytes(item.size, 2); // item.size in blob 2 is decimal number
          item.newSize = isize;
          this.currentFile = item;
          this.search.nativeElement.click();
          // this.files.push(item);
        } else {
          alert('File size exceeds 2MB');
        }
      } else {
        alert('only .jpg, .jpeg, .png, .pdf, .doc, .docx file format are allowed');
      }
    }
    // this.uploadFilesSimulator(0);
    // console.log(this.files);
  }

  addDescription() {
    this.currentFile.description = this.desc;
    this.files.push(this.currentFile);
    this.desc = '';
  }

  /**
   * convert bytes 
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
}
