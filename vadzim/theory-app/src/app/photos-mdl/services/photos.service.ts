import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import Photo from '../models/photo';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos/';

  constructor(
    private http: HttpClient,
    private ms: MessageService
  ) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl)
    .pipe(
      tap(_ => this.log('geholt photos')),
      catchError(this.buildErrorCallback('getPhotos', []))
    )
  }

  log(message: string) {
    this.ms.add(`PhotosService: ${message}`)
  }

  buildErrorCallback<T>(operation = 'operation', result: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
