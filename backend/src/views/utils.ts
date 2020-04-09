import { API_URL } from '../env'

type InputGroup = Record<string, any> | InputGroup[]

interface FormPageParams {
  title: string,
  titleStyle?: Record<string, string>,
  activePage: number,
  saveUrl: string,
  previousUrl?: string,
  nextUrl: string,
  inputGroups?: InputGroup[],
  content?: Record<string, any>[],
}

interface FeedbackPageParams {
  image: string,
  title: string,
  description: string,
  buttonValue: string,
  buttonLink: string,
}

function createPageCounter(activePage: number) {
  return {
    _beagleType_: 'page-counter',
    id: 'page-counter',
    totalPages: 5,
    activePage,
  }
}

function createForm(saveUrl: string, nextUrl: string, children: Record<string, any>[]) {
  return {
    _beagleType_: 'form',
    id: 'form',
    onSubmit: {
      name: 'xhr',
      url: `${API_URL}/${saveUrl}`,
      method: 'post'
    },
    onSuccess: {
      name: 'navigation',
      target: 'beagle',
      url: `/${nextUrl}`,
    },
    children,
  }
}

function createInputContainer(
  id: string,
  inputGroup: InputGroup[],
  marginVertical: string,
  marginLeft: string,
  marginRight: string,
) {
  return {
    _beagleType_: 'container',
    id,
    style: {
      margin: `${marginVertical} ${marginRight} ${marginVertical} ${marginLeft}`,
      display: 'flex',
      'flex-direction': 'row',
      flex: 1,
    },
    children: inputGroup.map((group, index) => createInputGroup(group, index, id, true))
  }
}

function createInput(input: Record<string, any>, marginLeft: string, marginRight: string) {
  return {
    style: {
      'margin': `0 ${marginRight} 0 ${marginLeft}`,
      flex: 1
    },
    ...input,
  }
}

function createInputGroup(
  inputGroup: InputGroup,
  index: number,
  idPrefix: string,
  isChildContainer = false,
): Record<string, any> {
  const isOnLeft = index % 2 === 0
  const marginLeft = isOnLeft ? '0' : '15px'
  const marginRight = isOnLeft ? '15px' : '0'
  
  if (inputGroup instanceof Array) {
    const mLeft = isChildContainer ? marginLeft : '0'
    const mRight = isChildContainer ? marginRight : '0'
    const mVertical = isChildContainer ? '0' : '30px'
    const groupId = `${idPrefix}-${index + 1}`
    return createInputContainer(groupId, inputGroup, mVertical, mLeft, mRight)
  }

  return createInput(inputGroup, marginLeft, marginRight)
}

function createFormCard(
  title: string,
  inputGroups: InputGroup[] = [],
  content: Record<string, any>[] = [],
  titleStyle?: Record<string, string>,
) {
  return {
    _beagleType_: 'card',
    id: 'form-card',
    children: [
      {
        _beagleType_: 'title',
        style: titleStyle,
        id: 'form-title',
        value: title,
      },
      ...inputGroups.map((group, index) => createInputGroup(group, index, 'field-group')),
      ...content,
    ]
  }
}

function createButtons(previousUrl?: string) {
  return {
    _beagleType_: 'container',
    id: 'button-group',
    style: {
      display: 'flex',
      'flex-direction': 'row',
      'justify-content': 'space-between',
      'padding-top': '40px',
    },
    children: [
      {
        _beagleType_: 'button',
        id: 'previous-button',
        value: 'Anterior',
        type: 'event',
        event: {
          name: 'navigation',
          target: 'beagle',
          url: `/${previousUrl}`,
        },
        disabled: !previousUrl,
        style: {
          'align-self': 'start',
        }
      },
      {
        _beagleType_: 'button',
        id: 'next-button',
        value: 'Próximo',
        type: 'submit',
        style: {
          'align-self': 'end',
        }
      }
    ]
  }
}

function createView(children: Record<string, any>[]) {
  return {
    _beagleType_: 'container',
    id: 'content',
    style: {
      width: '800px',
      height: '100%',
      display: 'flex',
      'flex-direction': 'column',
    },
    children,
  }
}

export function createFormPage({
  title,
  titleStyle,
  activePage,
  saveUrl,
  previousUrl,
  nextUrl,
  inputGroups,
  content,
}: FormPageParams) {
  return createView([
    createPageCounter(activePage),
    createForm(saveUrl, nextUrl, [
      createFormCard(title, inputGroups, content, titleStyle),
      createButtons(previousUrl)
    ])
  ])
}

export function createFeedbackPage({
  image,
  title,
  description,
  buttonValue,
  buttonLink,
}: FeedbackPageParams) {
  return createView([{
      _beagleType_: 'container',
      id: 'success-container',
      style: {
        display: 'flex',
        flex: '1',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
      },
      children: [ 
      {
        _beagleType_: 'card',
        id: 'success-card',
        style: {
          padding: '20px 30px',
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'justify-content': 'space-around',
          height: '500px',
        },
        children: [
          {
            _beagleType_: 'image',
            src: image,
            style: {
              width: '300px',
            }
          },
          {
            _beagleType_: 'title',
            value: title,
          },
          {
            _beagleType_: 'text',
            value: description,
          },
          {
            _beagleType_: 'button',
            type: 'link',
            url: buttonLink,
            value: buttonValue,
          },
        ],
      },
    ],
  }])
}
