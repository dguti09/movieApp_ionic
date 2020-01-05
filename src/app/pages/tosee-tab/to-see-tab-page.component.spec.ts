import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToSeeTabPage } from './to-see-tab-page.component';

describe('Tab2Page', () => {
  let component: ToSeeTabPage;
  let fixture: ComponentFixture<ToSeeTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToSeeTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToSeeTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
