# ngx-popup

## Installation

```sh
waw add ngx-popup
```

## Usage
```
import { PopupModule } from 'src/app/modules';
@NgModule({
	imports: [
		PopupModule
	]
})

```
```html
<wpopup title='...' text='...'></wpopup>
```
## Arguments
```
label: string | Displayed text
name: string | name textarea
model: string | Returns the input text
modelChange | Called when model changes
placeholder | Displayed input placeholder
name | Displayed input  name
disabled | Make input disabled
```

