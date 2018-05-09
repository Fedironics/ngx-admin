import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../../models/post.model';
import { Upload } from '../../../models/upload.model';
import { ActivatedRoute } from "@angular/router";
import { AngularFireList } from 'angularfire2/database/interfaces';
import { UploadService } from '../../../@core/data/upload.service';

@Component({
  selector: 'ngx-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  public id: string;
  public post: any;
  public postRef: AngularFireObject<Post>;
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private db: AngularFireDatabase, private activatedRoute: ActivatedRoute, private upSvc: UploadService) {

  }
  setImage() {
    //TODO : here upload the image which has been set to firebase and add it as an attribute of this post
  }
  ngOnInit() {
    this.activatedRoute.params.map(params => params['id']).subscribe((id) => this.id = id);
    this.postRef = this.db.object('blog/' + this.id);
    this.postRef.valueChanges().subscribe(res => {
          this.post = res; 
    });

  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload)
  }

  update() {
    this.postRef.update(this.post);
  }

}
