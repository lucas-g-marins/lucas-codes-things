import React, { useState, useRef } from "react";
import "./TypeChecker.scss";

function TypeChecker() {
  const [text, setText] = useState<string>("");
  const [typeSize, setTypeSize] = useState<number>(64);
  const [leading, setLeading] = useState<number>(1.5);

  const typeCheckerRef = useRef<HTMLDivElement>(null);

  function handleTextChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setText(e.target.value);
  }

  function handleSizeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTypeSize(parseInt(e.target.value));
    const textArea = typeCheckerRef.current?.querySelector("textarea");
    if (textArea) {
      textArea.style.fontSize = `${typeSize}px`;
    }
  }

  function handleLeadingChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLeading(parseFloat(e.target.value));
    const textArea = typeCheckerRef.current?.querySelector("textarea");
    if (textArea) {
      textArea.style.lineHeight = `${leading}`;
    }
  }

  function handleItalicCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const textArea = typeCheckerRef.current?.querySelector("textarea");
    if (e.target.checked == true) {
      if (textArea) {
        textArea.style.fontStyle = "italic";
      }
    } else {
      if (textArea) {
        textArea.style.fontStyle = "normal";
      }
    }
  }

  return (
    <div className="type-checker" ref={typeCheckerRef}>
      <section className="type-checker__options">
        <h1 className="type-checker__title">Type Checker</h1>
        <div className="type-checker__option">
          <label className="type-checker__label">Your text</label>
          <input
            type="text"
            name="sentence"
            placeholder="The quick brown fox..."
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="type-checker__option">
          <label className="type-checker__label">
            Type Size <span>{typeSize.toString()}px</span>
          </label>
          <input
            type="range"
            name="typesize"
            min={12}
            max={200}
            value={typeSize}
            onChange={handleSizeChange}
          />
        </div>
        <div className="type-checker__option">
          <label className="type-checker__label">
            Leading <span>{leading}</span>
          </label>
          <input
            type="range"
            name="leading"
            min={0.75}
            max={2.5}
            step={0.25}
            value={leading}
            onChange={handleLeadingChange}
          ></input>
        </div>
        <div className="type-checker__option type-checker__option--checkbox">
          <label className="type-checker__label">Italic</label>
          <input
            type="checkbox"
            name="italic"
            onChange={handleItalicCheck}
          ></input>
        </div>
      </section>
      <textarea
        value={text}
        placeholder="The quick brown fox jumps over the lazy dog."
        onChange={handleTextChange}
        className="type-checker__textarea"
      ></textarea>
    </div>
  );
}

export default TypeChecker;
