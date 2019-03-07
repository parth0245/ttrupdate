import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owener-property-submit',
  templateUrl: './owener-property-submit.component.html',
  styleUrls: ['./owener-property-submit.component.css']
})
export class OwenerPropertySubmitComponent implements OnInit {
  sale: boolean = false;
  rent: boolean = false;
  pg: boolean = false;

  bedrooms: Array<number> = [];
  balconies: Array<any> = [];
  furnishedStatus: Array<string> = [];
  setBedroomTo: any;
  setBalconiesTo: any;
  setFloorsTo: any;
  setFurnishedStatus: any;
  propertyStatus: any;

  username: string;
  email: string;
  mobile: string;
  propertyFor: string;

  propertyTypes: Array<any>;
  selectedPropertyType: number;
  propertylocations: Array<any>;
  selectedpropertyLocation: string;
  societyName: string;

  totalFloors: number;
  selectedFloor: number;
  bathroomsCount: string;

  constructionAllowed: string;
  openSides: string;
  pgAvailableFor: string;
  pgOccupancy: string;
  pgAge: string;
  pgtenants: string;
  pgBathroom: string;
  pgBalcony: string;
  pgCommonArea: string;

  propertyCoveredArea: string;
  propertyCoveredAreaUnit: string = 'ft';
  propertyCarpetArea: string;
  propertyCarpetAreaUnit: string = 'ft';
  propertyAvailabilityType: string;

  availableFromForRent: string;
  rentPropAvailableDay: string;
  rentPropAvailableMonth: string;
  rentPropAvailableYear: string;

  salePropAvailableMonth: string;
  salePropAvailableYear: string;
  days: Array<number> = [];
  months: Array<String> = ['January', 'Feruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];
  years: Array<number> = [];
  year: number;
  date: Date = new Date();

  pgFurnishing: any = [];
  propertyPrice:number;
  propertyMainPrice:number;
  propertyOtherPrice:number;
  propertyElectricityPrice:number;
  laundryCharges:number;
  securityCharges:number;
  NoticePeriod:string;
  agreeToPost:boolean=false;
  constructor() {
    for (var i = 0; i < 10; i++) {
      this.bedrooms[i] = i + 1;
      this.balconies[i] = i + 1;
    }
    for (var i = 0; i < 31; i++) {
      this.days[i] = i + 1;
    }
    this.furnishedStatus[0] = "Furnished";
    this.furnishedStatus[1] = "Unfurnished";
    this.furnishedStatus[2] = "Semi-Furnished";
    this.propertyTypes = [
      { id: 1, name: "Flat" },
      { id: 2, name: "Individual House" },
      { id: 3, name: "Villa" },
      { id: 4, name: "Multistory appartment" },
      { id: 5, name: "Builders floor" }
    ];
    this.propertylocations = [
      { id: 0, name: 'Geeta Bhavan' }
    ]
    this.year = this.date.getFullYear(); 2019
    for (var i = 0; i <= 3; i++) {
      this.years[i] = this.year + i;
    }
    this.pgFurnishing = [{
      id: 1, name: 'TV', selected: false,
    },
    {
      id: 2, name: 'AC', selected: false,
    },
    {
      id: 3, name: 'Washing Machine', selected: false,
    },
    {
      id: 4, name: 'Bed', selected: false,
    },
    {
      id: 5, name: 'Wifi', selected: false,
    },
    {
      id: 6, name: 'Cooler', selected: false,
    }
    ,
    {
      id: 7, name: 'Geyser', selected: false,
    }
    ,
    {
      id: 8, name: 'Fridge', selected: false,
    }
    ,
    {
      id: 9, name: 'Study Table', selected: false,
    }
    ]
  }

  selectFurnished(index) {
    this.setFurnishedStatus = index;
  }
  selectBedrooms(index) {
    this.setBedroomTo = index;
  }
  selectBalconies(index) {
    this.setBalconiesTo = index;
  }

  ngOnInit() {
  }

  setPropertyAvailabilityType(type) {
    this.propertyAvailabilityType = type;
  }

  setFor(prop) {
    if (prop == 'sale') {
      this.sale = true;
      this.rent = false;
      this.pg = false;
    }
    else if (prop == 'rent') {
      this.sale = false;
      this.rent = true;
      this.pg = false;
    }
    else {//pg
      this.sale = false;
      this.rent = false;
      this.pg = true;
    }
  }

}
