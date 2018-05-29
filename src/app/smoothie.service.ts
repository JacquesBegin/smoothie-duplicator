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

  // private smoothiesUrl = '/api/smoothies';
  private smoothiesUrl = 'http://localhost:8882/api/smoothies';


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getSmoothies(): Observable<Smoothie[]> {
    this.messageService.add('SmoothieService: fetched smoothies');
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

  updateSmoothie(smoothie: any): Observable<any> {
    return this.http.put(`${this.smoothiesUrl}/${smoothie._id}`, smoothie, httpOptions).pipe(
      tap(_ => this.log(`updated smoothie id=${smoothie._id}`)),
      catchError(this.handleError<any>('updateSmoothie'))
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
