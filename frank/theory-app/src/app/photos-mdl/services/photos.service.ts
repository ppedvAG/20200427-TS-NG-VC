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
      tap(_ => this.log('geholt Fotor')),
      catchError(this.buildErrorCallback('getPhotos', []))
    )
  }


  buildErrorCallback<T>(operation = 'operation', result: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  log(message: string) {
    this.msg.add(`TodoService: ${message}`)
  }

}

