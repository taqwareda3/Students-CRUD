import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }
  // get data
  getAllStudents() {
    return this.httpClient.get<any>(`${environment.APIURL}/students`)
      .pipe(map((res: any) => {
        return res
      }))
  }
  // add data
  addStudentData(data: any) {
    return this.httpClient.post<any>(`${environment.APIURL}/students`, data)

  }
  // update Info
  updateInfo(id: number, data: any) {
    return this.httpClient.put<any>(`${environment.APIURL}/students/${id}`, data)
      .pipe(map((res: any) => {
        return res
      }))

  }
  // delete Student
  deleteStudent(id: number) {
    return this.httpClient.delete<any>(`${environment.APIURL}/students/${id}`)
      .pipe(map((res: any) => {
        return res
      }))

  }
  // getStudentById
  getStudentById(id: number) {
    return this.httpClient.get<any>(`${environment.APIURL}/students/${id}`)
      .pipe(map((res: any) => {
        return res
      }))

  }

}
