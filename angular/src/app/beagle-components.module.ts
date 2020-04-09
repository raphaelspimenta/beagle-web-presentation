import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { NgSelectModule } from '@ng-select/ng-select'
import { FormsModule } from '@angular/forms'
import { LoadingComponent } from './components/loading/loading.component'
import { ErrorComponent } from './components/error/error.component'
import { ButtonComponent } from './components/button/button.component'
import { CardComponent } from './components/card/card.component'
import { CheckboxComponent } from './components/checkbox/checkbox.component'
import { ContainerComponent } from './components/container/container.component'
import { FormComponent } from './components/form/form.component'
import { ImageComponent } from './components/image/image.component'
import { InputComponent } from './components/input/input.component'
import { PageCounterComponent } from './components/page-counter/page-counter.component'
import { RadioComponent } from './components/radio/radio.component'
import { RadioGroupComponent } from './components/radio-group/radio-group.component'
import { SelectComponent } from './components/select/select.component'
import { TextComponent } from './components/text/text.component'
import { TitleComponent } from './components/title/title.component'

const components = [
  LoadingComponent,
  ErrorComponent,
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  ContainerComponent,
  FormComponent,
  ImageComponent,
  InputComponent,
  PageCounterComponent,
  RadioComponent,
  RadioGroupComponent,
  SelectComponent,
  TextComponent,
  TitleComponent,
]

@NgModule({
  declarations: components,
  entryComponents: components,
  exports: components,
  imports: [
    HttpClientModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
  ],
})
export class BeagleComponentsModule {}
