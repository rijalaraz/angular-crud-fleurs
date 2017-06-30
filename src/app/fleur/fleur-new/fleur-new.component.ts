import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Fleur } from '../fleur';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MaxnumberlengthValidator } from '../../app-directives/maxnumberlength-validator.directive';

@Component({
  selector: 'app-fleur-new',
  templateUrl: './fleur-new.component.html',
  styleUrls: ['./fleur-new.component.css']
})
export class FleurNewComponent implements OnInit {

  newFleur = new Fleur();
  @Output() createNewFleurEvent = new EventEmitter();

  fleurForm: FormGroup;
  submitted = false;

  formErrors = {
    'nom': '',
    'couleur': '',
    'prix': ''
  };
  validationMessages = {
    'nom': {
      'required':   'Le champ Nom est obligatoire.',
      'minlength':  'Le champ Nom doit contenir au moins 4 caractères.',
      'maxlength':  'Le champ Nom ne doit pas contenir plus de 24 caractères.'
    },
    'couleur': {
      'required':   'Le champ Couleur est obligatoire.'
    },
    'prix': {
      'required':   'Le champ Prix est obligatoire.',
      'maxlength':  'Le champ Prix ne doit pas contenir plus de 2 chiffres.'
    }
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.fleurForm = this.fb.group({
      'nom': [this.newFleur.nom, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24)
        ]
      ],
      'couleur': [this.newFleur.couleur, [
          Validators.required
        ]
      ],
      'prix': [this.newFleur.prix, [
          Validators.required,
          MaxnumberlengthValidator.maxNumberLength(2)
        ]
      ]
    });
  
    this.fleurForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.fleurForm) { return; }
    const form = this.fleurForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  createFleur(){
    this.submitted = true;
    this.createNewFleurEvent.emit(this.fleurForm);
  }

}
