import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MySerService {
 
  URL="https://localhost:7224/api/YadVashem/"

  constructor(private http:HttpClient) { }

  node:any=null;
  SendLocationServe(location:string):Observable<any>
  {
    let formData = new FormData();
    formData.append("newLocation", location)
    return this.http.post<any>(this.URL + "SendLocationServe", formData);
  }


  getListToClient():Observable<string[]>
  {
    return this.http.get<string[]>(this.URL + "sendListToClient");
  }

  getFileListToClient():Observable<string[]>
  {
    return this.http.get<string[]>(this.URL + "SendFileListToClient");
  }

  getTypeFileListToClient():Observable<string[]>
  {
    return this.http.get<string[]>(this.URL + "SendTypeFileListToClient");
  }


}
