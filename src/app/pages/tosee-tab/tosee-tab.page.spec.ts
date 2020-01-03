import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToseeTabPage } from './tosee-tab.page';

describe('Tab2Page', () => {
  let component: ToseeTabPage;
  let fixture: ComponentFixture<ToseeTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToseeTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToseeTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
