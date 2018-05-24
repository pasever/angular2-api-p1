import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component ({
    selector: 'app-entry-list',
    declarations: [
        AppComponent,
        EntryListComponent
    ],
    boostrap: [AppComponent]
})
export class AppModule {

}