import Header from "@/components/Global/Header";
import {
   ContactForm,
   Container,
   Description,
   ForCompanies,
   Form,
   FormInput,
   Main,
   ResponsiveIframe,
} from "./styles";
import ExecutivosBanner from "@/components/Global/Banner";

export default function LPCompanies() {
   return (
      <Container>
         <Header />
         <Main>
            <ExecutivosBanner />
            <ForCompanies>
               <h1>PARA EMPRESAS</h1>
               <ResponsiveIframe>
                  <iframe
                     width="560"
                     height="315"
                     src="https://www.youtube.com/embed/RI8L-TOHVlM"
                     title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                  ></iframe>
               </ResponsiveIframe>
            </ForCompanies>
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
                     <input type="tel" name="phoneNumber" id="phoneNumber" />
                  </FormInput>
                  <FormInput>
                     <label htmlFor="email">SEU MELHOR EMAIL</label>
                     <input type="email" name="email" id="email" />
                  </FormInput>
               </Form>
            </ContactForm>
            <Description>
               <p>
                  Impulsione o sucesso empresarial com tecnologia de ponta para
                  empresas!
               </p>

               <p>
                  Nossa Software House especializada oferece soluções
                  tecnológicas inovadoras para empresas. Com expertise em
                  inteligência artificial, desenvolvimento de aplicativos,
                  criação de sites e suporte a startups, estamos prontos para
                  impulsionar o crescimento do seu negócio.
               </p>

               <p>
                  Nossa equipe de especialistas em tecnologia trabalha em
                  estreita colaboração com você para fornecer soluções
                  personalizadas que melhoram a eficiência, produtividade e
                  vantagem competitiva da sua empresa.
               </p>

               <p>
                  Desde algoritmos avançados de IA até aplicativos e sites
                  intuitivos, nos dedicamos a fornecer soluções de tecnologia
                  inovadoras, preparando sua empresa para os desafios do mundo
                  digital em constante evolução.
               </p>

               <p>
                  Conte conosco para impulsionar sua empresa com tecnologia
                  inteligente e inovadora. Entre em contato hoje mesmo e
                  junte-se a uma nova era de sucesso empresarial!
               </p>

               <p>
                  [Palavras-chave: tecnologia para empresas, soluções
                  tecnológicas, inteligência artificial, desenvolvimento de
                  aplicativos, criação de sites, suporte a startups, inovação
                  empresarial, sucesso empresarial, especialistas em tecnologia]
               </p>
            </Description>
         </Main>
      </Container>
   );
}
