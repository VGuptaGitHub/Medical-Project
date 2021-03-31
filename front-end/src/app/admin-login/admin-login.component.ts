import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  admin: Admin = new Admin();
  message: any;
  id: string;
  constructor(private router: Router, private adminservice: AdminService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.adminservice.adminLogin(this.admin).subscribe(data => {
      console.log(data);
      this.message = data;
      var obj = this.message;
      console.log(obj);
      if (obj == null) {
        this.router.navigate(['admin/login']);
      }

      this.id = obj.adminId;
      console.log(this.id);

      sessionStorage.setItem("adminId", this.id);
      this.router.navigate(['admin/home']);
    });
  }

}
