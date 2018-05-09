import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Upload } from '../../models/upload.model';
import * as firebase from 'firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class UploadService {
  constructor(private db: AngularFireDatabase) { }
  private basePath:string = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;
  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
  
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        var snapshotRef = snapshot as firebase.storage.UploadTaskSnapshot;
        // upload in progress
        upload.progress = (snapshotRef.bytesTransferred / snapshotRef.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload)
      }
    );
  }
  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
}