// import React, { useState } from "react";
// import './Calculator.css';
// import banner from './images/banner.png';

// const Calculator = () => {
//   const [formData, setFormData] = useState({
//     transport: "",
//     electricity: "",
//     diet: "",
//     waste: "",
//     water: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [result, setResult] = useState("");

//   const formFields = {
//     transport: "Transport (km)",
//     electricity: "Electricity (kWh)",
//     diet: "Diet (index 1-5)",
//     waste: "Waste (kg)",
//     water: "Water Usage (liters)"
//   };

//   const validateForm = () => {
//     const errorMessages = {};

//     errorMessages.transport = validatePositiveNumber(formData.transport, formFields.transport);
//     errorMessages.electricity = validatePositiveNumber(formData.electricity, formFields.electricity);
//     errorMessages.diet = validateRange(formData.diet, 1, 5, formFields.diet);
//     errorMessages.waste = validateNonNegativeNumber(formData.waste, formFields.waste);
//     errorMessages.water = validateNonNegativeNumber(formData.water, formFields.water);

//     setErrors(errorMessages);

//     return Object.values(errorMessages).every((message) => message === "");
//   };

//   const validatePositiveNumber = (value, fieldName) => {
//     if (isNaN(value) || value <= 0) {
//       return `Please enter a valid positive number for ${fieldName}.`;
//     }
//     return "";
//   };

//   const validateNonNegativeNumber = (value, fieldName) => {
//     if (isNaN(value) || value < 0) {
//       return `Please enter a valid non-negative number for ${fieldName}.`;
//     }
//     return "";
//   };

//   const validateRange = (value, min, max, fieldName) => {
//     if (isNaN(value) || value < min || value > max) {
//       return `Please enter a value for ${fieldName} between ${min} and ${max}.`;
//     }
//     return "";
//   };

//   const calculateFootprint = () => {
//     const transportFootprint = formData.transport * 0.21;
//     const electricityFootprint = formData.electricity * 0.5;
//     const dietFootprint = formData.diet * 100;
//     const wasteFootprint = formData.waste * 0.2;
//     const waterFootprint = formData.water * 0.003;

//     return (
//       transportFootprint +
//       electricityFootprint +
//       dietFootprint +
//       wasteFootprint +
//       waterFootprint
//     ).toFixed(2);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       const totalFootprint = calculateFootprint();
//       setResult(`${totalFootprint} kg CO2`);
//     }
//   };

//   return (
//     <div className="calc-body">
//       <div className="Header-container">
//         <header className="App-header" style={{ backgroundImage: `url(${banner})` }} />
//       </div>
//       <div className="calculator-container">
//         <form className="calculator-form" onSubmit={handleSubmit}>
//           {Object.keys(formFields).map((field) => (
//             <div key={field} className="form-group">
//               <label htmlFor={field}>{formFields[field]}</label>
//               <input
//                 type="number"
//                 id={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//               />
//               {errors[field] && <p id={`${field}-error`} className="error">{errors[field]}</p>}
//             </div>
//           ))}
//           <button type="submit">Calculate</button>
//         </form>
//         <div className="result">
//           <h2>Your Total Footprint: <span>{result || "0 kg CO2"}</span></h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;

import React, { useState } from "react";
import axios from "axios";
import './Calculator.css';
import banner from './images/banner.png';

const Calculator = ({ email }) => { // Pass email as a prop
  const [formData, setFormData] = useState({
    transport: "",
    electricity: "",
    diet: "",
    waste: "",
    water: "",
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const formFields = {
    transport: "Transport (km)",
    electricity: "Electricity (kWh)",
    diet: "Diet (index 1-5)",
    waste: "Waste (kg)",
    water: "Water Usage (liters)"
  };

  const validateForm = () => {
    const errorMessages = {};

    errorMessages.transport = validatePositiveNumber(formData.transport, formFields.transport);
    errorMessages.electricity = validatePositiveNumber(formData.electricity, formFields.electricity);
    errorMessages.diet = validateRange(formData.diet, 1, 5, formFields.diet);
    errorMessages.waste = validateNonNegativeNumber(formData.waste, formFields.waste);
    errorMessages.water = validateNonNegativeNumber(formData.water, formFields.water);

    setErrors(errorMessages);

    return Object.values(errorMessages).every((message) => message === "");
  };

  const validatePositiveNumber = (value, fieldName) => {
    if (isNaN(value) || value <= 0) {
      return `Please enter a valid positive number for ${fieldName}.`;
    }
    return "";
  };

  const validateNonNegativeNumber = (value, fieldName) => {
    if (isNaN(value) || value < 0) {
      return `Please enter a valid non-negative number for ${fieldName}.`;
    }
    return "";
  };

  const validateRange = (value, min, max, fieldName) => {
    if (isNaN(value) || value < min || value > max) {
      return `Please enter a value for ${fieldName} between ${min} and ${max}.`;
    }
    return "";
  };

  const calculateFootprint = () => {
    const transportFootprint = formData.transport * 0.21;
    const electricityFootprint = formData.electricity * 0.5;
    const dietFootprint = formData.diet * 100;
    const wasteFootprint = formData.waste * 0.2;
    const waterFootprint = formData.water * 0.003;

    return (
      transportFootprint +
      electricityFootprint +
      dietFootprint +
      wasteFootprint +
      waterFootprint
    ).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const saveFootprint = async (footprint) => {
    try {
      const response = await axios.post(
        "http://localhost:8090/api/v1/footprint/save",
        {
          email: email, // Include email in the request
          footprint: parseFloat(footprint) // Send the calculated footprint
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log("Footprint saved:", response.data);
    } catch (error) {
      console.error("Error saving footprint:", error.response?.data || error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const totalFootprint = calculateFootprint();
      setResult(`${totalFootprint} kg CO2`);
      saveFootprint(totalFootprint); // Save to the backend
    }
  };

  return (
    <div className="calc-body">
      <div className="Header-container">
        <header className="App-header" style={{ backgroundImage: `url(${banner})` }} />
      </div>
      <div className="calculator-container">
        <form className="calculator-form" onSubmit={handleSubmit}>
          {Object.keys(formFields).map((field) => (
            <div key={field} className="form-group">
              <label htmlFor={field}>{formFields[field]}</label>
              <input
                type="number"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
              />
              {errors[field] && <p id={`${field}-error`} className="error">{errors[field]}</p>}
            </div>
          ))}
          <button type="submit">Calculate</button>
        </form>
        <div className="result">
          <h2>Your Total Footprint: <span>{result || "0 kg CO2"}</span></h2>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
