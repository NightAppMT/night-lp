import { useState } from "react";
import Circle from "../Circle";
import { Form } from "./styles";

export default function FormComponent() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedNumber = formatPhoneNumber(value);
    setPhoneNumber(formattedNumber);
  };

  const formatPhoneNumber = (number: string) => {
    const cleanedNumber = number.replace(/\D/g, "");
    const formattedNumber = cleanedNumber.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );
    return formattedNumber;
  };

  return (
    <Form>
      <div className="label-and-input">
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" required />
      </div>

      <div className="label-and-input">
        <label htmlFor="phoneNumber">Telefone</label>
        <input
          type="tex"
          name="phoneNumber"
          id="phoneNumber"
          value={phoneNumber}
          onChange={phoneMask}
          required
        />
      </div>

      <div className="label-and-input">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div className="button-container">
        <button>Enviar</button>
      </div>

      <Circle top={16} left={16} />
      <Circle top={16} rigth={16} />
      <Circle bottom={16} left={16} />
      <Circle bottom={16} rigth={16} />
    </Form>
  );
}
