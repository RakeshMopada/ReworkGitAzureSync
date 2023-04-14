import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { M3OdinModule } from '@infor-up/m3-odin-angular';
import { IabOdinAngularExtensionsLibraryModule } from 'iab-odin-angular-extensions-library';

describe('MainComponent', () => {
   let component: MainComponent;
   let fixture: ComponentFixture<MainComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            MainComponent,
         ],
         imports: [

            SohoComponentsModule,
            M3OdinModule,
            IabOdinAngularExtensionsLibraryModule,
         ]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('1 + 1 is 2', () => {
      const sum = component.sumAandB(1, 1);
      // tslint:disable-next-line: no-magic-numbers
      expect(sum).toEqual(2);
   });
});
