import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AnalyticsService } from './service/analytics.service';
import { SidenavService } from './service/sidenav.service';
import { ThemeService } from './service/theme.service';
import { SearchService } from './service/search.service';
import { AuthService } from './service/auth.service';

import { CardComponent } from './components/card/card.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { FilteredSearchPipe } from './pipes/filtered-search.pipe';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [ HttpClient ]
            }
        }),
        CommonModule,
        MaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
        AnalyticsService,
        AuthService,
        SidenavService,
        SearchService,
        ThemeService,
    ],
    declarations: [
        CardComponent,
        CardContentComponent,
        FilteredSearchPipe,
        LoginComponent
    ],
    exports: [
        CardComponent,
        CardContentComponent,
        CommonModule,
        MaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        TranslateModule,
        FilteredSearchPipe,
    ],
    entryComponents: [
        LoginComponent
    ]
})
export class SharedModule { }