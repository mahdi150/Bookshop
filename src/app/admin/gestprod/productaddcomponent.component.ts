import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';

@Component({
  selector: 'app-productaddcomponent',
  templateUrl: './productaddcomponent.component.html',
  styleUrls: ['./productaddcomponent.component.css']
})
export class ProductaddcomponentComponent implements OnInit {
  
  productAddForm : FormGroup=new FormGroup({}) ;

  constructor() { }

  ngOnInit(): void {
    this.productAddForm = new FormGroup({
      nameControl : new FormControl('') ,
      prixControl : new FormControl('') ,
      descriptionControl : new FormControl('') ,
      categorieControl : new FormControl('') 
    })
  }

  addproduct(){
    alert('Name  :  '   +this.productAddForm.controls.nameControl.value+ '  \n price  :  ' + this.productAddForm.controls.prixControl.value
    +'\n description  :  ' + this.productAddForm.controls.descriptionControl.value
    +'\n categorie product   :  '+this.productAddForm.controls.categorieControl.value );
  }

}
