import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppModule} from './app/app.module'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


/*Faire une mise en page avec:
1- Un haut de page
2- Un menu de nav principal
3- Un corps de page
4- Un pied de page*/ 












// DANS LE MAIN.TS doit contenir que le code ci dessous
const platformRef = platformBrowserDynamic();
platformRef.bootstrapModule(AppModule);