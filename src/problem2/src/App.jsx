import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  var ethereum_address = require('ethereum-address');
  const [values, setValues] = useState({
    ethAddress: "",
    otp: "",
  });

  const inputs = [
    {
      id: 1,
      name: "ethAddress",
      type: "text",
      placeholder: "ETH Address",
      errorMessage:
        "Invalid ETH Address.",
      label: "ETH Address",
      required: true,
    },
    {
      id: 2,
      name: "amountToSend",
      type: "number",
      step: "0.01",
      min: 0.01,
      placeholder: "Amount",
      errorMessage:
        "Please enter a valid amount of money.",
      label: "Amount To Send",
      required: true,
    },
    {
      id: 3,
      name: "otp",
      type: "text",
      placeholder: "OTP",
      errorMessage:
        "OTP should be a 6-digit alphanumeric sequence.",
      label: "OTP Authentication",
      pattern: `^{6}$`,
      minlength: "6",
      maxlength: "6",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    ethAddressValidation();
  };

  const ethAddressValidation = () => {
    const ethAddressValue = document.getElementsByName("ethAddress")[0];
    if (!ethereum_address.isAddress(ethAddressValue.value)) {
      ethAddressValue.setCustomValidity("Invalid field.")
    } else {
      ethAddressValue.setCustomValidity("")
    }
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Fancy Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Send Tokens</button>
      </form>
    </div>
  );
};

export default App;