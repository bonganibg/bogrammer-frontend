import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public static getStudentDropboxPath(studentFolder: string, taskFolder: string){
    return `${studentFolder}/${taskFolder}.zip`
  }

  public static getWorkDropboxPath(taskFolder: string){
    return `/courses${taskFolder}.zip`
  }
}
