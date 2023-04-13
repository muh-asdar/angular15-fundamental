import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  baseURL = 'https://api.quran.com/api/v4';

  headers = new HttpHeaders({});

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllSurahQuran(): Observable<any> {
    const httpOptions = {
      headers: this.headers,
      params: new HttpParams()
        .set('language', 'en')
    }

    return this.httpClient
      .get<any>(
        this.baseURL + '/chapters',
        httpOptions
      ).pipe(retry(1), catchError(this.handleError))
  }

  handleError(err:any){
    return throwError(() => {
      console.error(err);
      return err;
    })
  }

}
