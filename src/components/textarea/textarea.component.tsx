import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import './textarea.style.css'
type onChangeCallBack = (value: string) => void
type TextAreaProps = {
    onChangeCB: onChangeCallBack
}
const DebouncedTextArea = ({ onChangeCB, ...props }: TextAreaProps) => {
  const [value, setValue] = useState("");

  const debounceValue = useDebouncedCallback(onChangeCB, 500);

  
  useEffect(() => {
    debounceValue(value)
  }, [value, debounceValue])
  
  return (
    <>
        <textarea
        value={value}
        placeholder="Enter prompt here..."
        onChange={(e) => setValue(e.target.value)}
        {...props}
        />
    </>
  );
};

export default DebouncedTextArea;
