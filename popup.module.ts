import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { PopupComponent } from './popup.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		PopupComponent
	],
	providers: [],
	exports: [PopupComponent]
})

export class PopupModule { }
