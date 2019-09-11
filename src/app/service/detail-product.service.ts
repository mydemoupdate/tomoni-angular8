import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DetailProductService {
  url = {

  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    // 
    return this.http.get('https://tomoniglobal.jp/test.php');
  }

}