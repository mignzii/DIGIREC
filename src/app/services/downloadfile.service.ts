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
<<<<<<< HEAD
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
=======
    return this.http.get('http://104.236.2.144/facture/download');
  }
  downloadFiletrue(): Observable<Blob>{
    return this.http.get('http://104.236.2.144/facture/downloadfile', { responseType: 'blob' });
  }
  downloadFileCA(): Observable<Blob> {
    return this.http.get('http://104.236.2.144/etudiant/downloadCA', { responseType: 'blob' });
  }
  downloadFileteanche(): Observable<Blob> {
    return this.http.get('http://104.236.2.144/etudiant/downloadtranche', { responseType: 'blob' });
  }
  donwloadfileDebiteur(): Observable<Blob> {
    return this.http.get('http://104.236.2.144/etudiant/downloaddebiteur', { responseType: 'blob' });
  }
  createfiletranche(): Observable<any> {
    return this.http.get('http://104.236.2.144/etudiant/createdownloadtranche');
  }
  createfileCA(): Observable<any> {
    return this.http.get('http://104.236.2.144/etudiant/createdownloadCA');
  }
  createfileDebiteur(): Observable<any> {
    return this.http.get('http://104.236.2.144/etudiant/createdownloaddebiteur');
>>>>>>> parent of cfd754c ( last essai)
  }
}
