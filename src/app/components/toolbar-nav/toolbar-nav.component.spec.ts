
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNavComponent } from './toolbar-nav.component';

describe('ToolbarNavComponent', () => {
  let component: ToolbarNavComponent;
  let fixture: ComponentFixture<ToolbarNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
