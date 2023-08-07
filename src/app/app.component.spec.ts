import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {PlayerModule} from "./player/player.module";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
      HttpClientModule,
      PlayerModule,
      MatToolbarModule
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
