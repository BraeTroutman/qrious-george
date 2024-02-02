import { Bullseye, Button, Flex, FlexItem, Form, FormGroup, Modal, ModalVariant, Stack, StackItem, TextInput } from "@patternfly/react-core";
import { QRCodeCanvas } from "qrcode.react";
import { Fragment, FunctionComponent, useState } from "react";
import { ChromePicker, ColorChangeHandler, ColorResult } from "react-color";

const QRPresenter: FunctionComponent = () => {
  const [text, setText] = useState("hey hey Dayday")
  const [fg, setfg] = useState('black')
  const [bg, setbg] = useState('white')
  const [fgPickerOpen, setFgPickerOpen] = useState(false)
  const [bgPickerOpen, setBgPickerOpen] = useState(false)

  const handlePickedFgColor: ColorChangeHandler = (color: ColorResult, _) => {setfg(color.hex)}
  const handlePickedBgColor: ColorChangeHandler = (color: ColorResult, _) => {setbg(color.hex)}
  const handleFGModalToggle = () => {setFgPickerOpen(!fgPickerOpen)}
  const handleBGModalToggle = () => {setBgPickerOpen(!bgPickerOpen)}

  return (
    <Fragment>
    <Stack hasGutter>
      <StackItem>
        <Bullseye>
          <QRCodeCanvas value={text} size={300} bgColor={bg} fgColor={fg}/>
        </Bullseye>
      </StackItem>
      <StackItem>
        <Flex>
          <FlexItem>
            <Button isBlock onClick={handleFGModalToggle}>Foreground Color</Button>
          </FlexItem>
          <FlexItem>
            <Button isBlock onClick={handleBGModalToggle}>Background Color</Button>
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem>
        <Form>
          <FormGroup label="Text to encode">
            <TextInput
              isRequired
              type='text'
              value={text}
              onChange={(_, newtext) => setText(newtext)}
            />
          </FormGroup>
        </Form>
      </StackItem>
    </Stack>
    <Modal isOpen={fgPickerOpen} variant={ModalVariant.small} onClose={handleFGModalToggle}>
      <Bullseye>
        <ChromePicker color={fg} onChangeComplete={handlePickedFgColor}/>
      </Bullseye>
    </Modal>
    <Modal isOpen={bgPickerOpen} variant={ModalVariant.small} onClose={handleBGModalToggle}>
      <Bullseye>
        <ChromePicker color={bg} onChangeComplete={handlePickedBgColor}/>
      </Bullseye>
    </Modal>
    </Fragment>
  )
}

export default QRPresenter;
