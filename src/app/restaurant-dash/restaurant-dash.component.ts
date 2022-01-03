import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {

  formValue!: FormGroup
  restauranModelObj: RestaurantData = new RestaurantData;
  allRestaurantData: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      adresse: [''],
      services: ['']
    })
    this.getAllData();
  }
  addResto() {
    this.restauranModelObj.name = this.formValue.value.name;
    this.restauranModelObj.email = this.formValue.value.email;
    this.restauranModelObj.mobile = this.formValue.value.mobile;
    this.restauranModelObj.adresse = this.formValue.value.adresse;
    this.restauranModelObj.services = this.formValue.value.services;

    this.api.postRestaurant(this.restauranModelObj).subscribe(res => {
      console.log(res);
      alert("Restaurant records added successfully");
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset()
      this.getAllData();
    },
      err => {
        alert("verifier les infos saisie !! ")
      }

    )
  }
  getAllData() {
    this.api.getRestaurant(this.restauranModelObj , 2).subscribe(res => {
      this.allRestaurantData = res;
    })
  }
  deleteResto(data:any){
    this.api.deleteRestaurant(data.id).subscribe(res=> {
      alert("restaurant deleted !");
      this.getAllData();
    })
  }
  onEditResto(data:any) {
    this.restauranModelObj.id = data.id
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['adresse'].setValue(data.adresse);
    this.formValue.controls['services'].setValue(data.services);

  }
  updateResto(){

    this.restauranModelObj.name = this.formValue.value.name;
    this.restauranModelObj.email = this.formValue.value.email;
    this.restauranModelObj.mobile = this.formValue.value.mobile;
    this.restauranModelObj.adresse = this.formValue.value.adresse;
    this.restauranModelObj.services = this.formValue.value.services;

    this.api.updateRestaurant(this.restauranModelObj.id).subscribe(res=> {
      alert('restaurant records updated successfully')
    })
  }
}
