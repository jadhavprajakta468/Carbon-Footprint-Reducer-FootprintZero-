// import React, { useState, useRef } from "react";
// import axios from "axios";
// import './Quiz.css';
// import { data } from '../../assets/data';
// import { useUser } from "../../UserContext";

// const Quiz = () => {
//   const { email } = useUser(); // Get the email from context
//   let [index, setIndex] = useState(0);
//   let [question, setQuestion] = useState(data[index]);
//   let [lock, setLock] = useState(false);
//   let [score, setScore] = useState(0);
//   let [result, setResult] = useState(false);

//   let Option1 = useRef();
//   let Option2 = useRef(null);
//   let Option3 = useRef(null);
//   let Option4 = useRef(null);

//   let option_arr = [Option1, Option2, Option3, Option4];

//   const checkAns = (e, ans) => {
//     if (!lock) {
//       setLock(true);
//       if (question.ans === ans) {
//         e.target.classList.add("correct");
//         setScore(prev => prev + 1);
//       } else {
//         e.target.classList.add("wrong");
//         option_arr[question.ans - 1].current.classList.add("correct");
//       }
//     }
//   };

//   const next = () => {
//     if (lock) {
//       if (index === data.length - 1) {
//         setResult(true);
//         sendScoreToBackend();  // Send data to backend when quiz ends
//         return 0;
//       }
//       setIndex(++index);
//       setQuestion(data[index]);
//       setLock(false);
//       option_arr.map((option) => {
//         option.current.classList.remove("wrong");
//         option.current.classList.remove("correct");
//         return null;
//       });
//     }
//   };

//   const reset = () => {
//     setScore(0);
//     setIndex(0);
//     setQuestion(data[0]);
//     setLock(false);
//     setResult(false);
//   };

//   // Function to send email and score to backend
//   const sendScoreToBackend = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8090/api/v1/scores/save",
//         {
//           email: email,
//           quizScore: score
//         },
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       );
//       console.log('Score saved:', response.data);
//     } catch (error) {
//       console.error('Error saving score:', error.response?.data || error.message);
//     }
//   };  

//   return (
//     <div className="quiz-cont">
//       <h1>Quiz</h1>
//       <hr />
//       {result ? <>
//       console.log({score});
      
//         <button onClick={sendScoreToBackend}>Save Score</button><br />
//         <h2>You scored {score} out of {data.length}</h2>
//         <button onClick={reset}>Reset</button><br />
//       </> :
//         <>
//           <h2>{index + 1}. {question.question}</h2>
//           <ul>
//             <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
//             <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
//             <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
//             <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
//           </ul>
//           <button onClick={next}>Next</button>
//           <div className="index">{index + 1} of {data.length} Questions</div>
//         </>
//       }
//     </div>
//   );
// };

// export default Quiz;


import React, { useState, useRef } from "react";
import axios from "axios";
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = ({ email }) => { // Accept email as a prop
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef();
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_arr = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      setLock(true);
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        option_arr[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        sendScoreToBackend(); // Send data to backend when quiz ends
        return;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_arr.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset = () => {
    setScore(0);
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
    setResult(false);
  };

  // Function to send email and score to backend
  const sendScoreToBackend = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8090/api/v1/score/save",
        {
          email: email, // Use the email prop
          quizScore: score
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log('Score saved:', response.data);
    } catch (error) {
      console.error('Error saving score:', error.response?.data || error.message);
    }
  };

  return (
    <div className="quiz-cont">
      <h1>Quiz</h1>
      <hr />
      {result ? (
        <>
          <h2>You scored {score} out of {data.length}</h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">{index + 1} of {data.length} Questions</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
