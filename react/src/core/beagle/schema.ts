interface Component {
  style?: Record<string, string>,
}

interface Container extends Component {}

interface Card extends Component {}

interface Title extends Component {
  value: string,
}

interface Text extends Component {
  value: string,
}

interface Input extends Component {
  name: string,
  label?: string,
  type?: string,
  value?: string,
  disabled?: boolean,
  autocomplete?: string,
  placeholder?: string,
}

interface Option {
  name: string,
  value: string,
}

interface Select extends Component {
  label: string,
  name: string,
  value?: string,
  options: Option[],
}

interface RadioGroup extends Component {
  name: string,
  value?: string,
}

interface Radio extends Component {
  value: string,
  position?: 'left' | 'right' | 'top' | 'bottom',
}

interface Checkbox extends Component {
  name: string,
  position?: 'left' | 'right' | 'top' | 'bottom',
}

interface Button extends Component {
  type?: 'link' | 'submit' | 'reset' | 'button',
  value: string,
  disabled?: boolean,
  url?: string,
}

interface Image extends Component {
  src: string,
}

interface PageCounter extends Component {
  totalPages: number,
  activePage: number,
}

interface NavigationEvent {
  event: 'navigation',
  target: 'app' | 'beagle',
  url: string,
}

interface XhrEvent {
  event: 'xhr',
  url: string,
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
}

type Event = NavigationEvent | XhrEvent

interface Form extends Component {
  onSubmit?: Event,
  onSuccess?: Event,
}

export default interface Schema {
  container: Container,
  card: Card,
  title: Title,
  text: Text,
  input: Input,
  select: Select,
  'radio-group': RadioGroup,
  radio: Radio,
  checkbox: Checkbox,
  button: Button,
  image: Image,
  'page-counter': PageCounter,
  form: Form,
}
