import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
    selector: 'app-tabs',
    templateUrl:'tabs-component.html',
    styleUrls:['tabs-component.css']
})
export class TabsComponent{
    constructor(public router:Router){}
    logout(){}
}