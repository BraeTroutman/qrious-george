import { 
  Bullseye, 
  Card, CardBody, CardHeader, 
  Divider, 
  Flex, FlexItem, 
  Form, FormGroup, 
  Stack, StackItem, 
  TextInput, 
  Title 
} from "@patternfly/react-core";
import { QRCodeCanvas } from "qrcode.react";
import { FunctionComponent, useState } from "react";
import { CompactPicker, ColorChangeHandler, ColorResult } from "react-color";

const QRPresenter: FunctionComponent = () => {
  const [text, setText] = useState("")
  const [fg, setfg] = useState('black')
  const [bg, setbg] = useState('white')

  const handlePickedFgColor: ColorChangeHandler = (color: ColorResult, _) => {setfg(color.hex)}
  const handlePickedBgColor: ColorChangeHandler = (color: ColorResult, _) => {setbg(color.hex)}

  return (
    <Card isRounded>
      <CardHeader><Title headingLevel="h1">Generate QR Code from Text</Title></CardHeader>
      <Divider inset={{default: "insetMd"}}/>
      <CardBody>
        <Stack hasGutter>
          <StackItem>
            <Form>
              <FormGroup label="Text to encode">
                <TextInput
                  isRequired
                  placeholder="insert text"
                  type='text'
                  value={text}
                  onChange={(_, newtext) => setText(newtext)}
                />
              </FormGroup>
            </Form>
          </StackItem>
          <StackItem>
              <Bullseye>
                <Flex>
                  <FlexItem><QRCodeCanvas value={text} size={300} bgColor={bg} fgColor={fg}/></FlexItem>
                  <FlexItem alignSelf={{default: 'alignSelfCenter'}}>
                    <Stack hasGutter>
                      <Title headingLevel="h4">Foreground Color</Title>
                      <StackItem>
                        <CompactPicker color={fg} onChangeComplete={handlePickedFgColor}/>
                      </StackItem>
                      <Divider inset={{default: "insetMd"}}/>
                      <Title headingLevel="h4">Background Color</Title>
                      <StackItem>
                        <CompactPicker color={bg} onChangeComplete={handlePickedBgColor}/>
                      </StackItem>
                    </Stack>
                  </FlexItem>
                </Flex>
              </Bullseye>
          </StackItem>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default QRPresenter;
