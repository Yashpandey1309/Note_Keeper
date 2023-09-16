import React from "react";

function Notes(props) {
    return <div className="box">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <img
        onClick={()=>{
            props.onDelete(props.id)
        }}
        src="https://imgs.search.brave.com/Ny2VixarWv5-PRBZP26YOdQ6DPitgzr35F_Ei_IZkr4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMzQwNS8zNDA1/MjQ0LnBuZw"
        alt="delete"
      />
    </div>
}

export default Notes;