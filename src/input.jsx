import React, { useState } from "react";

export default function InputArea(props) {
  const [note, handleNote] = useState({
    title: "",
    detail: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    handleNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="inputArea">
      <form>
        <input
          onChange={handleChange}
          className="title"
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          className="detail"
          name="detail"
          placeholder="Take a note..."
          value={note.detail}
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onAdd(note);
            handleNote({
              title: "",
              detail: "",
            });
            event.preventDefault();
          }}
        >
          <span>+</span>
        </button>
      </form>
    </div>
  );
}
