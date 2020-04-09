import { createBeagleUIService } from '@zup-it/beagle-react'
import { getCurrentEnvConfig } from 'core/config'
import Loader from 'components/Loader'
import ErrorComponent from 'components/ErrorComponent'
import Container from 'components/Container'
import PageCounter from 'components/PageCounter'
import Form from 'components/Form'
import Card from 'components/Card'
import Title from 'components/Title'
import Input from 'components/Form/Input'
import Select from 'components/Form/Select'
import Button from 'components/Form/Button'
import Checkbox from 'components/Form/Checkbox'
import RadioGroup from 'components/Form/RadioGroup'
import Radio from 'components/Form/RadioGroup/Radio'
import Text from 'components/Text'
import Image from 'components/Image'
import translateStyle from './translateStyle'
import Schema from './schema'

const { beagleUrl } = getCurrentEnvConfig()

// fixme: problemas de tipo. Form está sendo incorretamente invalidado. Ao excluir um componente
// necessário, o ts não reclama.
export default createBeagleUIService<Schema>({
  baseUrl: beagleUrl,
  middlewares: [translateStyle],
  components: {
    loading: Loader,
    error: ErrorComponent,
    container: Container,
    'page-counter': PageCounter,
    // @ts-ignore
    form: Form,
    card: Card,
    title: Title,
    input: Input,
    select: Select,
    button: Button,
    // @ts-ignore
    checkbox: Checkbox,
    'radio-group': RadioGroup,
    radio: Radio,
    text: Text,
    image: Image,
  },
})
