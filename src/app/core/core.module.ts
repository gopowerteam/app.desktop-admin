import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
  APP_INITIALIZER,
} from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const appBaseHrefFactory = () => '/';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
