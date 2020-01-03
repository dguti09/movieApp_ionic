import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoriteTabPage } from './favorite-tab.page';

describe('Tab3Page', () => {
  let component: FavoriteTabPage;
  let fixture: ComponentFixture<FavoriteTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
