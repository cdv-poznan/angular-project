import { Component, OnInit, ViewChild, OnChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListOfSkills } from 'src/app/shared/list-of-skills';
import { EventsHandlerService } from '../shared/events-handler.service';
import { PaginationService } from '../shared/pagination.service';

declare var $: any;

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {
  //wartości z lokal referenców
  @ViewChild('f') characterDetailsForm: NgForm;
  @ViewChild('industry') industryChosen: NgForm;
  @ViewChild('gender') genderSelected: NgForm;
  @ViewChild('skills') skillGroup: NgForm;

  

  //zmienne przechowywujące wybrane wartości
  public genderGroupStatus: boolean;
  public featuresGroupStatus: boolean;
  public industryGroupStatus = false;
  public skillsGroupStatus: boolean;
  public formStatus = false;
  
  //lista płci
  genderList: Array<string> = ['Mężczyzna', 'Kobieta', 'Bez różnicy'];

  //checklista wybranych umiejetnosci
  public checkedSkillsList = [];
  public checkedSkillsLimit = 3;

  //lista z cechami postaci
  featurePoints = 5;
  characterFeatures: Array<{ feature: string, intensity: number }> = [
    {
      feature: 'kreatywność',
      intensity: 5
    },
    {
      feature: 'punktualność',
      intensity: 5
    },
    {
      feature: 'wytrzymałość',
      intensity: 5
    }
  ]

  //lista ze skillami dla każdej brażny
  listOfSkills: Array<ListOfSkills> = [
    {
      name: 'rybołóstwo',
      skills: ['szczupaki', 'Malowanie', 'Płytki', 'Elektryka', 'Murowanie']
    },
    {
      name: 'budowlanka',
      skills: ['Szpachlowanie', 'Malowanie', 'Płytki', 'Elektryka', 'Murowanie']
    },
    {
      name: 'marketing',
      skills: ['Facebook Ads', 'Copywriting', 'Photoshop', 'Illustrator', 'After Effects']
    },
    {
      name: 'it',
      skills: ['angular', 'php', 'wordpress']
    },
    {
      name: 'rolnictwo',
      skills: ['plewienie', 'sianie', 'jazda traktorem']
    },
    {
      name: 'handel',
      skills: ['sprzedaż', 'obsługa klienta', 'prace na magazynie']
    }
  ]

  constructor(private eventsHandlerService: EventsHandlerService, private paginationService: PaginationService){}

  ngOnInit(): void {
    console.log(this.characterDetailsForm);
  }

  onSubmit(industryStatus: boolean, genderStatus: boolean) {

    let g = this.genderSelected.control.value;

    // this.paginationService.characterCreationValid.emit(true);

    if (industryStatus && genderStatus && (g === 'Bez różnicy') && (this.checkedSkillsList.length === this.checkedSkillsLimit) ){
      this.paginationService.characterCreationValid.emit(true);
      
    }
    else if(industryStatus && genderStatus && (this.checkedSkillsList.length === this.checkedSkillsLimit)) {
      this.paginationService.characterCreationValid.emit(false);
      this.eventsHandlerService.processEvent('gender-rejects');
    }

    else {
      this.paginationService.characterCreationValid.emit(false);

    }
  }

  onClick(){
    console.log(this.characterDetailsForm);
  }

  onGenderChange(event){
  console.log(this.genderSelected.control.value);
  }

  onIndustryChange(event) { 
    //zachowanie myszy
    console.log(event)
    this.checkedSkillsList = [];
  }

  //na zmiane umiejetnosci
  onSkillChanged(event) {
    let value = event.target.value;
    let status = event.target.checked;

    // jesli mozna jeszcze dodac 
    if (this.checkedSkillsList.length < this.checkedSkillsLimit) {
      //jesli dodaje
      if (status) {
        this.checkedSkillsList.push(value)
      }
      //jesli odejmuje
      else {
        event.target.checked = false;
        this.checkedSkillsList.splice((this.checkedSkillsList.indexOf(value)), 1);
      }
    }
    // jesli lista jest juz pelna
    else {
      // jesli dodaje
      if(status){
        event.target.checked = false;

      }
      //jesli odejmuje
      else {
        this.checkedSkillsList.splice((this.checkedSkillsList.indexOf(value)), 1);
      }
    }

    //zachowanie myszy
    switch (this.checkedSkillsList.length){
      case 1: this.eventsHandlerService.processEvent('just-text', 'Jeszcze dwie', 1000);
      console.log(this.checkedSkillsList.length);
      break;
      case 2: this.eventsHandlerService.processEvent('just-text', 'Jeszcze jedną', 1000);
      console.log(this.checkedSkillsList.length);
      break;
      case 3: this.eventsHandlerService.processEvent('just-text', 'Wystarczy!', 1000);
      console.log(this.checkedSkillsList.length);
      break;
    }
  }

  //przy zmianie cech charakteru
  onFeatureChange(event) {
    //zapisuje nową wartość do tablicy
    let brandNewFeature = {feature: event.target.id, intensity: event.target.value};
    let newIntensity = event.target.value;
    let featureToChange = this.characterFeatures.find((feature) => feature.feature === event.target.id)
    let oldIntensity = featureToChange.intensity;
    let featureToChangeIndex = this.characterFeatures.indexOf(featureToChange);
    this.characterFeatures[featureToChangeIndex] = brandNewFeature;

    //sprawdza czy sa jeszcze punkty
    if (newIntensity > oldIntensity) {
      if (this.featurePoints > 0){
        this.featurePoints -= 1;
      }
      else {
        this.characterFeatures[featureToChangeIndex].intensity -= 1; 
      }
    }
    else {
      this.featurePoints += 1;
    }
  }

}
