import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MyPhotos } from '../models/photo';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class PhotosService {

  private photosurl = 'https://jsonplaceholder.typicode.com/photos/';

  constructor(
    private http: HttpClient,
    private msg: MessageService
  ) { }


  getPhotos(): Observable<MyPhotos[]> {
    return this.http.get<MyPhotos[]>(this.photosurl)
    .pipe(
      tap(_ => this.log('geholt Foto')),
      catchError(this.buildErrorCallback('getPhotos', []))
    )
  }

  addPhoto(photo: MyPhotos): Observable<MyPhotos> {
    return this.http.put<MyPhotos>(this.photosurl, photo, httpOptions)
    .pipe(
      tap((newPhoto: MyPhotos) => this.log(`photo hinzugefügt mit der id= ${newPhoto.id}`)),
      catchError(this.buildErrorCallback<MyPhotos>('addPhoto', photo))
    );
  }



  buildErrorCallback<T>(operation = 'operation', result: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  log(message: string) {
    console.log('message :>> ', message);
    this.msg.add(`PhotoService: ${message}`);
  }

}

