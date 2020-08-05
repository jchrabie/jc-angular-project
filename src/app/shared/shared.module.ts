import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AnalyticsService } from './service/analytics.service';
import { SidenavService } from './service/sidenav.service';
import { ThemeService } from './service/theme.service';
import { SearchService } from './service/search.service';
import { TagService } from './service/tag.service';
import { AuthService } from './service/auth.service';

import { CardComponent } from './components/card/card.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { FilteredSearchPipe } from './pipes/filtered-search.pipe';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SpeedDialFabComponent } from './components/speed-dial-fab/speed-dial-fab.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


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
        TagService,
        ThemeService,
    ],
    declarations: [
        CardComponent,
        CardContentComponent,
        FilteredSearchPipe,
        LoginComponent,
        HeaderComponent,
        SidenavComponent,
        FooterComponent,
        SearchbarComponent,
        SpeedDialFabComponent
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
        HeaderComponent,
        SidenavComponent,
        FooterComponent,
        SearchbarComponent,
        SpeedDialFabComponent
    ],
    entryComponents: [
        LoginComponent
    ]
})
export class SharedModule { }
