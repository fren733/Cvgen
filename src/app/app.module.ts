import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { BoardComponent } from './components/board/board.component';
import { MenuComponent } from './components/menu/menu.component';
import { TextComponent } from './components/forms/text/text.component';
import { CertificatesComponent } from './components/forms/certificates/certificates.component';
import { PersonalDataComponent } from './components/forms/personal-data/personal-data.component';
import { ReferencesComponent } from './components/forms/references/references.component';
import { CoursesComponent } from './components/forms/courses/courses.component';
import { WorkHistoryComponent } from './components/forms/work-history/work-history.component';
import { EducationComponent } from './components/forms/education/education.component';
import { SkillsComponent } from './components/forms/skills/skills.component';
import { WorkHistoryItemComponent } from './components/forms/work-history/work-history-item/work-history-item.component';
import { EducationItemComponent } from './components/forms/education/education-item/education-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    BoardComponent,
    MenuComponent,
    PersonalDataComponent,
    TextComponent,
    CertificatesComponent,
    ReferencesComponent,
    CoursesComponent,
    WorkHistoryComponent,
    EducationComponent,
    SkillsComponent,
    WorkHistoryItemComponent,
    EducationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
