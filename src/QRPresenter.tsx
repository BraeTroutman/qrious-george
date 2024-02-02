import { Bullseye, Form, FormGroup, Stack, StackItem, TextInput } from "@patternfly/react-core";
import { QRCodeCanvas } from "qrcode.react";
import { FunctionComponent, useState } from "react";

const QRPresenter: FunctionComponent = () => {
  const [text, setText] = useState("hey hey Dayday")

  return (
    <Stack>
      <StackItem>
        <Bullseye>
        <QRCodeCanvas value={text} size={300}/>
        </Bullseye>
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
  )
}

export default QRPresenter;
