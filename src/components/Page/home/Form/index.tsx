import { Form } from "./styles";

export default function LandingPageForm() {
   return (
      <Form>
         <div className="label-and-input">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />
         </div>

         <div className="label-and-input">
            <label htmlFor="phoneNumber">Telefone</label>
            <input type="tel" name="phoneNumber" id="phoneNumber" />
         </div>

         <div className="label-and-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
         </div>

         <div className="button-container">
            <button type="submit">Enviar</button>
         </div>

         <div className="circle circle1" />
         <div className="circle circle2" />
         <div className="circle circle3" />
         <div className="circle circle4" />
      </Form>
   );
}
