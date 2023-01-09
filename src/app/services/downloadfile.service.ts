import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadfileService {


  constructor(private http: HttpClient) { }
  
  downloadFile(): Observable<Blob> {
    return this.http.get('http://localhost:6001/facture/download', { responseType: 'blob' });
  }
  downloadFileCA(): Observable<Blob> {
    return this.http.get('http://localhost:6001/etudiant/download', { responseType: 'blob' });
  }
}
