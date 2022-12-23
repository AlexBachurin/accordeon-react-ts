import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type QuestionProps = {
  id: number,
  title: string, 
  info: string
}

const Question: React.FC<QuestionProps> = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/*display plus or minus */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/*display info on click on icon */}
      <p>{showInfo ? info : null}</p>
    </article>
  );
};

export default Question;
