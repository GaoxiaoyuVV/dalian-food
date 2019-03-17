import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpEventType } from '@angular/common/http';
import { UserService } from '../user.service';
import {FileUploader} from 'ng2-file-upload';
import { Router } from '@angular/router';
import { ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  private uploader: FileUploader = new FileUploader({
    url: '/api/auth/upload',
    method: 'POST',
    itemAlias: 'file'
  });
  userRole:''
  constructor(private http:HttpClient,
              private userService:UserService,
              private router: Router
    ){}
   /*  selectedFile: File;

    onFileChanged(event) {
      this.selectedFile = event.target.files[0]
    }
  
    onUpload() {
      const uploadData = new FormData();
      uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
      this.http.post('/api/auth/upload', uploadData, {
        reportProgress: true,
        observe: 'events'
      })
        .subscribe(event => {
          console.log(event); // handle event here
        });
    } */
  /*   uploadFile(files: FileList) {
      if (files.length == 0) {
        console.log("No file selected!");
        return
  
      }
      let file: File = files[0];
  
      this.userService.uploadFile(file)
        .subscribe(
          event => {
            if (event.type == HttpEventType.UploadProgress) {
              const percentDone = Math.round(100 * event.loaded / event.total);
              console.log(`File is ${percentDone}% loaded.`);
            } else if (event instanceof HttpResponse) {
              console.log(event);
              console.log('File is completely loaded!');
            }
          },
          (err) => {
            console.log("Upload Error:", err);
          }, () => {
            console.log("Upload done");
          }
        )
    } */
 /*    selectedFileOnChanged(event: any) {
      // 这里是文件选择完成后的操作处理
      // alert('上传文件改变啦');
      console.log(event.target.value);
      console.log(event);
    } */
    uploadFile() {
      alert('执行上传文件');
      // 上传
      this.uploader.queue[0].onSuccess = function (response, status, headers) {
        // 上传文件成功
        if (status == 200) {
          // 上传文件后获取服务器返回的数据
          const tempRes = response;
          console.log(response)
          alert(response);
        } else {
          // 上传文件后获取服务器返回的数据错误
          alert('上传失败');
          this.router.navigate(['failure'])
        }
      };
      // onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any;
      this.uploader.queue[0].upload(); // 开始上传
      // this.uploader.queue[0].onSuccess()
      alert('上传之后');
      this.router.navigate(['/success'])
    }
ngOnInit(){
  var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
}
}