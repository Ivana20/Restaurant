import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restaurant"
  rootUrl="http://localhost:3000/"
  constructor(private http: HttpClient) {}
 // url: "http://localhost:3000/restaurant"
 // constructor(private http:HttpClient) { }

//  getList() {
 //   return this.http.get(this.url);
 // }
 getList() {
   return this.http.get(this.url);
 }
 saveResto(data){
  //console.warn("service",data)
   return this.http.post(this.url,data)
 }
 deleteResto(id) {
   return this.http.delete(`${this.url}/${id}`)
 }
 getCurrentResto(id) {
  return this.http.get(`${this.url}/${id}`)
 }
 updateResto(id, data) {
  return this.http.put(`${this.url}/${id}`, data)
 }
 registerUser(data){
   return this.http.post(this.rootUrl+ "users", data)
 }

 getUsers(){
   return this.http.get(this.rootUrl + 'users');
 }
}
