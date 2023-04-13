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
    return this.http.get('https://coral-app-a57e6.ondigitalocean.app/facture/download');
  }
  downloadFiletrue(): Observable<Blob>{
    return this.http.get('https://coral-app-a57e6.ondigitalocean.app/facture/downloadfile', { responseType: 'blob' });
  }
  downloadFileCA(): Observable<Blob> {
    return this.http.get('https://coral-app-a57e6.ondigitalocean.app/etudiant/downloadCA', { responseType: 'blob' });
  }
  downloadFileteanche(): Observable<Blob> {
    return this.http.get('https://coral-app-a57e6.ondigitalocean.app/etudiant/downloadtranche', { responseType: 'blob' });
  }
  donwloadfileDebiteur(): Observable<Blob> {
    return this.http.get('https://coral-app-a57e6.ondigitalocean.app/etudiant/downloaddebiteur', { responseType: 'blob' });
  }
  createfiletranche(): Observable<any> {
    return this.http.get('https://coral-app-a57e6.ondigitalocean.app/etudiant/createdownloadtranche');
  }
  createfileCA(): Observable<any> {
    return this.http.get('https://coral-app-a57e6.ondigitalocean.app/etudiant/createdownloadCA');
  }
  createfileDebiteur(): Observable<any> {
    return this.http.get('https://coral-app-a57e6.ondigitalocean.app/etudiant/createdownloaddebiteur');
  }
}
