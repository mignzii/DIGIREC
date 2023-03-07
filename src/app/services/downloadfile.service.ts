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
    return this.http.get('https://starfish-app-82b5l.ondigitalocean.app/facture/download');
  }
  downloadFiletrue(): Observable<Blob>{
    return this.http.get('https://starfish-app-82b5l.ondigitalocean.app/facture/downloadfile', { responseType: 'blob' });
  }
  downloadFileCA(): Observable<Blob> {
    return this.http.get('https://starfish-app-82b5l.ondigitalocean.app/etudiant/downloadCA', { responseType: 'blob' });
  }
  downloadFileteanche(): Observable<Blob> {
    return this.http.get('https://starfish-app-82b5l.ondigitalocean.app/etudiant/downloadtranche', { responseType: 'blob' });
  }
  donwloadfileDebiteur(): Observable<Blob> {
    return this.http.get('https://starfish-app-82b5l.ondigitalocean.app/etudiant/downloaddebiteur', { responseType: 'blob' });
  }
  createfiletranche(): Observable<any> {
    return this.http.get('https://starfish-app-82b5l.ondigitalocean.app/etudiant/createdownloadtranche');
  }
  createfileCA(): Observable<any> {
    return this.http.get('https://starfish-app-82b5l.ondigitalocean.app/etudiant/createdownloadCA');
  }
  createfileDebiteur(): Observable<any> {
    return this.http.get('https://starfish-app-82b5l.ondigitalocean.app/etudiant/createdownloaddebiteur');
  }
}
