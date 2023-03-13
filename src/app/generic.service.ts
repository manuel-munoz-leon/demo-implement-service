import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  // private dataSubject: Subject<any>;

  constructor(private httpClient: HttpClient) {
    // this.dataSubject = new Subject();
  }

  // public get data$(): Observable {
  //   return this.dataSubject.asObservable();
  // }

  // public loadData() {
  //   this.httpClient
  //     .get('https://api.publicapis.org/entries')
  //     .subscribe((data) => {
  //       this.dataSubject.next(data);
  //     });
  // }

  getData<T>(apiUrl: string): Observable<T> {
    return this.httpClient.get<T>(apiUrl).pipe(
      catchError((error) => {
        console.warn(`API URL not found or there's a typo, error: ${error}`);
        return EMPTY;
      })
    );
  }
}
