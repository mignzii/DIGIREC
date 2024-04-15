import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadfileService {


  constructor(private http: HttpClient) { }
  
  downloadFile(): Observable<any>{
    return this.http.get('https://digirecbackend.digirec.site/facture/download');
  }
  downloadFiletrue(): Observable<Blob>{
    return this.http.get('https://digirecbackend.digirec.site/facture/downloadfile', { responseType: 'blob' });
  }
  downloadFileCA(): Observable<Blob> {
    return this.http.get('https://digirecbackend.digirec.site/etudiant/downloadCA', { responseType: 'blob' });
  }
  downloadFileteanche(): Observable<Blob> {
    return this.http.get('https://digirecbackend.digirec.site/etudiant/downloadtranche', { responseType: 'blob' });
  }
  donwloadfileDebiteur(): Observable<Blob> {
    return this.http.get('https://digirecbackend.digirec.site/etudiant/downloaddebiteur', { responseType: 'blob' });
  }
  createfiletranche(): Observable<any> {
    return this.http.get('https://digirecbackend.digirec.site/etudiant/createdownloadtranche');
  }
  createfileCA(): Observable<any> {
    return this.http.get('https://digirecbackend.digirec.site/etudiant/createdownloadCA');
  }
  createfileDebiteur(): Observable<any> {
    return this.http.get('https://digirecbackend.digirec.site/etudiant/createdownloaddebiteur');
  }
}
