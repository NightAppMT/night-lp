import { useState } from "react";
import { ContactForm, Form, FormInput } from "./styles";

export default function ContactFormComponent() {
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
    <ContactForm>
      <h2>QUER FALAR DIRETAMENTE CONOSCO?</h2>
      <h2>INSIRA SEUS DADOS:</h2>
      <Form>
        <FormInput>
          <label htmlFor="name">NOME</label>
          <input type="text" name="name" id="name" />
        </FormInput>

        <FormInput>
          <label htmlFor="phoneNumber">TELEFONE</label>
          <input 
            type="tel" 
            name="phoneNumber" id="phoneNumber"
            value={phoneNumber}
            onChange={phoneMask}
          />
        </FormInput>

        <FormInput>
          <label htmlFor="email">SEU MELHOR EMAIL</label>
          <input type="email" name="email" id="email" />
        </FormInput>
      </Form>
    </ContactForm>
  );
}
