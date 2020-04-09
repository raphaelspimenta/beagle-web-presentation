import { BeagleModule } from '@zup-it/beagle-angular'
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
import Schema from './schema'

@BeagleModule<Schema>({
  baseUrl: 'http://localhost:3001',
  module: {
    path: './beagle-components.module',
    name: 'BeagleComponentsModule',
  },
  components: {
    loading: LoadingComponent,
    error: ErrorComponent,
    button: ButtonComponent,
    card: CardComponent,
    checkbox: CheckboxComponent,
    container: ContainerComponent,
    form: FormComponent,
    image: ImageComponent,
    input: InputComponent,
    'page-counter': PageCounterComponent,
    radio: RadioComponent,
    'radio-group': RadioGroupComponent,
    select: SelectComponent,
    text: TextComponent,
    title: TitleComponent,
  },
})
export class Beagle {}
