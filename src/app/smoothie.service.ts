import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Smoothie } from './classes/smoothie';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  private smoothiesUrl = '/api/smoothies';


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getSmoothies(): Observable<Smoothie[]> {
    return this.http.get<Smoothie[]>(this.smoothiesUrl)
      .pipe(
        tap(smoothies => this.log('fetched smoothies')),
        catchError(this.handleError('getSmoothies', []))
      );
  }

  getSmoothie(id: string): Observable<Smoothie> {
    const url = `${this.smoothiesUrl}/${id}`;
    return this.http.get<Smoothie>(url).pipe(
      tap(_ => this.log(`fetched smoothie id=${id}`)),
      catchError(this.handleError<Smoothie>(`getSmoothie id=${id}`))
    );
  }

  updateSmoothie(smoothie: Smoothie): Observable<any> {
    return this.http.put(`${this.smoothiesUrl}/${smoothie._id}`, smoothie, httpOptions).pipe(
      tap(_ => this.log(`updated smoothie id=${smoothie._id}`)),
      catchError(this.handleError<any>('updateSmoothie'))
    );
  }

  addSmoothie(smoothie: Smoothie): Observable<Smoothie> {
    return this.http.post<Smoothie>(this.smoothiesUrl, smoothie, httpOptions).pipe(
      tap((smoothie: Smoothie) => this.log(`added smoothie w/ id=${smoothie._id}`)),
      catchError(this.handleError<Smoothie>('addSmoothie'))
    );
  }

  deleteSmoothie(smoothie: Smoothie | string): Observable<Smoothie> {
    const id = typeof smoothie === 'string' ? smoothie : smoothie._id;
    const url = `${this.smoothiesUrl}/${id}`;

    return this.http.delete<Smoothie>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted smoothie id=${id}`)),
      catchError(this.handleError<Smoothie>('deleteSmoothie'))
    );
  }

  searchSmoothies(term: string): Observable<Smoothie[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Smoothie[]>(`${this.smoothiesUrl}/name/${term}`).pipe(
      tap(_ => this.log(`found smoothies matching "${term}"`)),
      catchError(this.handleError<Smoothie[]>('searchSmoothies', []))
    );
  }

  private log(message: string) {
    this.messageService.add('SmoothieService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

}
