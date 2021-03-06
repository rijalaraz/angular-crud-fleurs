import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fleur } from './fleur';
import { FleurService } from './fleur.service';
import { FleurNewComponent } from './fleur-new/fleur-new.component';
import $ from 'jquery';

/*
const FLEURS: Fleur[] = [
  { id: 1, nom: 'Rose', couleur: 'blanc', prix: 15 },
  { id: 2, nom: 'Tulipe', couleur: 'noir', prix: 10 },
  { id: 3, nom: 'Dahlia', couleur: 'noir', prix: 18 },
  { id: 4, nom: 'Fuchsia', couleur: 'noir', prix: 13 },
  { id: 5, nom: 'Lobelie', couleur: 'blanc', prix: 20 }
];
*/

@Component({
  selector: 'app-fleur',
  templateUrl: './fleur.component.html',
  styleUrls: ['./fleur.component.css']
})
export class FleurComponent implements OnInit {

  fleurs: Fleur[];

  constructor(private router: Router, private fleurService: FleurService) { }

  ngOnInit() {
    
    this.fleurService
      .getFleurs()
      .then(fleurs => this.fleurs = fleurs);
    
    // this.fleurs = FLEURS;
  }

  createFleur(fleurNew: FleurNewComponent): void {
    
    this.fleurService
      .createFleur(fleurNew.fleurForm.value)
      .then(fleur => {
        this.fleurs.push(fleur);
        fleurNew.fleurForm.reset();
      })
      .catch(erreurs => {
        erreurs.json().forEach(function(error,index) { 
          fleurNew.formErrors[error.field] = error.message;
        })  
      });
    
    
    /*
    if( this.fleurs.length > 0 ){
      const lastFleur = this.fleurs.slice(-1)[0];
      fleurNew.fleurForm.value.id = lastFleur.id + 1;
    }else{
      fleurNew.fleurForm.value.id = 1;
    }
    this.fleurs.push(fleurNew.fleurForm.value);
    fleurNew.fleurForm.reset();
    */
  }

  deleteFleur(fleur: Fleur): void {
    
    this.fleurService
      .deleteFleur(fleur)
      .then(() => {
        this.fleurs = this.fleurs.filter(b => b !== fleur);
      });
    
    // this.fleurs = this.fleurs.filter(b => b !== fleur);
  }

  updateFleur(fleurs: any){
    
    this.fleurService
      .updateFleur(fleurs.edited)
      .then(() => {
        $('.modal-backdrop').remove();
        const i = this.fleurs.indexOf(fleurs.original);
        this.fleurs[i] = fleurs.edited;
      })
      .catch(erreurs => {
        erreurs.json().forEach(function(error,index) { 
          fleurs.fleurEditComponent.formErrors[error.field] = error.message;
        })  
      });
    
    /*
    $('.modal-backdrop').remove();
    const i = this.fleurs.indexOf(fleurs.original);
    this.fleurs[i] = fleurs.edited;
    */
    
  }
  

}
