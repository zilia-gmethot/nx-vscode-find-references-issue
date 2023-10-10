import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { myLib } from '@nx-vscode-find-references-issue/my-lib';

myLib();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
