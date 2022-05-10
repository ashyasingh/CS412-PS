import { Component } from '@angular/core';
// new
import { AppServiceService } from './app-service.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  form !: FormGroup;
  capital : string = "";
  country : string = "";

  constructor(private service : AppServiceService, private fb : FormBuilder) {}

  initform() {this.initializeform();}
  private initializeform() : void {
    this.form = this.fb.group({
      country: ''
    })
  }
  data(country: string){
    this.service.getcapital(country).subscribe((res) => {
      let json = JSON.parse(JSON.stringify(res))
      console.log('response', json.capital)
      this.capital = json.capital;
    }, (err) => { console.log('error', err) })
  }
  enterval(): void {
    console.log(this.form);
    let country: string = this.form.value.country;
    this.country = country;
    this.data(country);
    this.form.reset();
  }
}