import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
// import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from "./dbz/dbz.module";

@NgModule({
    declarations: [
        AppComponent,
        // ContadorComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeroesModule,
        ContadorModule,
        DbzModule
    ]
})
export class AppModule { }
