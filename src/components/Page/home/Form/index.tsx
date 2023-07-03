import Circle from "../Circle";
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
         
         <Circle top={16} left={16} />
         <Circle top={16} rigth={16}/>
         <Circle bottom={16} left={16} />
         <Circle bottom={16} rigth={16} />
      </Form>
   );
}
