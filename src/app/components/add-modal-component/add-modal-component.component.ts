import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/student.model';
import { SharedService } from 'src/app/services/shared/shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-modal-component',
  templateUrl: './add-modal-component.component.html',
  styleUrls: ['./add-modal-component.component.css']
})
export class AddModalComponentComponent implements OnInit {
  studentModule: student = new student();
  studentData: any;
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;
  categories: any


  constructor(
    private sharedService: SharedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getallData();
    // validationForm
    this.formValue = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('[A-Za-z]{5,}')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(5)]],
      img: ['', [Validators.required, Validators.minLength(5)]]
    })

  }
  // handleButtonsShow
  handleButtonsShow() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false
  }

  // getAllData
  getallData() {
    this.sharedService.getAllStudents().subscribe(res => {
      this.studentData = res
    }
    )
  }
  // deleteStudentData
  deleteStudentData(data: any) {
    this.sharedService.deleteStudent(data.id).subscribe(
      res => {
        // alert("deleted")
      }
    )
    this.closeAtuomatic();
  }
  // closeAtuomatic
  closeAtuomatic() {
    let ref = document.getElementById('cancel')
    ref?.click()
    this.formValue.reset();
    this.getallData();
  }

  // addStudentData
  addStudentData() {
    this.showAdd = true;
    this.showUpdate = false;
    this.studentModule.username = this.formValue.value.username;
    this.studentModule.email = this.formValue.value.email;
    this.studentModule.phone = this.formValue.value.phone;
    this.studentModule.imgUrl = this.formValue.value.img;
    this.sharedService.addStudentData(this.studentModule).subscribe(
      res => {
        console.log(res)
      }
    )
    this.closeAtuomatic()

  }
  // fillStudentDataInForm
  fillData(data: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.studentModule.id = data.id
    this.formValue.controls['username'].setValue(data.username);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['phone'].setValue(data.phone);
    this.formValue.controls['img'].setValue(data.imgUrl)
  }
  // updataStudentInfo
  updataStudentInfo() {
    this.studentModule.username = this.formValue.value.username;
    this.studentModule.email = this.formValue.value.email;
    this.studentModule.phone = this.formValue.value.phone;
    this.studentModule.imgUrl = this.formValue.value.img;

    this.sharedService.updateInfo(this.studentModule.id, this.studentModule).subscribe(
      res => {
        this.formValue.reset()
      },
      err => {
        console.log(err)
      }
    )
    this.closeAtuomatic();
  }

}
