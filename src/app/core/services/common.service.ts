import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public apiUrl = 'http://localhost:5000/api'; // replace with your Flask API endpoint
  constructor() { }
}
