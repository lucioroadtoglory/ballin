import React, {
  type ChangeEventHandler,
  type FC,
  type KeyboardEventHandler,
} from "react";
import { Container, LineCount, LineCounterWrapper, TextInput } from "./styles";

export const Editor: FC = () => {
  const [breaklines, setBreaklines] = React.useState<number>(1);
  const editorRef = React.useRef<HTMLTextAreaElement>(null);

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (key) => {
    if (key.code !== "Tab" || !editorRef.current) {
      return;
    }
    key.preventDefault();
    const editor = editorRef.current;
    const { value, selectionStart: start, selectionEnd: end } = editor;
    const divisor = "    ";
    editor.value = `${value.substring(0, start)}${divisor}${value.substring(
      end
    )}`;
    const lineFocus = start + 4;
    editor.selectionStart = lineFocus;
    editor.selectionEnd = lineFocus;
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e): void => {
    const endOfLines = e.target.value.match(/\n|\r\n/g)?.length ?? 0;
    setBreaklines(endOfLines + 1 || 1);
  };

  return (
    <Container>
      <LineCounterWrapper>
        {Array.from<unknown, JSX.Element>(
          { length: breaklines },
          (_, index) => (
            <LineCount key={index}>{index + 1}</LineCount>
          )
        )}
      </LineCounterWrapper>
      <TextInput ref={editorRef} onChange={onChange} onKeyDown={onKeyDown} />
    </Container>
  );
};
