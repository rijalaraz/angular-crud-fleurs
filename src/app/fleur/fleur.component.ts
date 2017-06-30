import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fleur } from './fleur';
import { FleurService } from './fleur.service';
import { FormGroup } from '@angular/forms';


const FLEURS: Fleur[] = [
  { id: 1, nom: 'Rose', couleur: 'blanc', prix: 10 },
  { id: 2, nom: 'Tulipe', couleur: 'noir', prix: 15 },
  { id: 3, nom: 'Dahlia', couleur: 'noir', prix: 20 },
  { id: 4, nom: 'Fuchsia', couleur: 'noir', prix: 10 },
  { id: 5, nom: 'Lobelie', couleur: 'blanc', prix: 10 }
];


@Component({
  selector: 'app-fleur',
  templateUrl: './fleur.component.html',
  styleUrls: ['./fleur.component.css']
})
export class FleurComponent implements OnInit {

  fleurs: Fleur[];

  constructor(private router: Router, private fleurService: FleurService) { }

  ngOnInit() {
    /*
    this.fleurService
      .getFleurs()
      .then(fleurs => this.fleurs = fleurs);
    */
    this.fleurs = FLEURS;
  }

  createFleur(fleurForm: FormGroup): void {
    /*
    this.fleurService
      .createFleur(fleurForm.value)
      .then(fleur => {
        if( this.fleurs.length > 0 ){
          const lastFleur = this.fleurs.slice(-1)[0];
          fleur.id = lastFleur.id + 1;
        }else{
          fleur.id = 1;
        }
        this.fleurs.push(fleur);
        fleurForm.reset();
      });
    */

    if( this.fleurs.length > 0 ){
      const lastFleur = this.fleurs.slice(-1)[0];
      fleurForm.value.id = lastFleur.id + 1;
    }else{
      fleurForm.value.id = 1;
    }
    this.fleurs.push(fleurForm.value);
    fleurForm.reset();
  }

  deleteFleur(fleur: Fleur): void {
    /*
    this.fleurService
      .deleteFleur(fleur)
      .then(() => {
        this.fleurs = this.fleurs.filter(b => b !== fleur);
      });
    */
    this.fleurs = this.fleurs.filter(b => b !== fleur);
  }

  updateFleur(fleurs: any){
    /*
    this.fleurService
      .updateFleur(fleurs.edited)
      .then(() => {
        const i = this.fleurs.indexOf(fleurs.original);
        this.fleurs[i] = fleurs.edited;
      });
    */
    const i = this.fleurs.indexOf(fleurs.original);
    this.fleurs[i] = fleurs.edited;
  }
  

}
