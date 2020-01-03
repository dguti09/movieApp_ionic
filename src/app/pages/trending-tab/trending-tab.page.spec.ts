import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrendingTabPage } from './trending-tab.page';

describe('Tab4Page', () => {
  let component: TrendingTabPage;
  let fixture: ComponentFixture<TrendingTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
