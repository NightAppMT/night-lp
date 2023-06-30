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
import Footer from "@/components/Global/Footer";

export default function LPCompanies() {
   return (
      <Container>
         <Header />
         <Main>
            <ExecutivosBanner />
            <ForCompanies>
               <h1>PARA VOCÊ</h1>
               <ResponsiveIframe>
                  <iframe
                     src="https://www.youtube.com/embed/0zl72thBKzo"
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
                  Desfrute de tecnologia personalizada para atender às suas
                  necessidades!
               </p>
               <p>
                  Na nossa Software House, oferecemos soluções tecnológicas
                  personalizadas para atender às suas demandas individuais. Seja
                  você um empreendedor, profissional autônomo ou entusiasta da
                  tecnologia, estamos aqui para atender às suas necessidades.
               </p>
               <p>
                  Nossa equipe especializada está pronta para ajudá-lo a
                  explorar todo o potencial da inteligência artificial,
                  desenvolver aplicativos sob medida, criar sites incríveis e
                  trazer suas ideias e projetos para a realidade.
               </p>
               <p>
                  Com uma abordagem centrada no cliente, buscamos entender suas
                  metas e desejos para entregar soluções tecnológicas que
                  superem suas expectativas. Estamos aqui para simplificar sua
                  vida digital e garantir que você esteja equipado com as
                  ferramentas certas para alcançar o sucesso.
               </p>
               <p>
                  Descubra uma nova dimensão de tecnologia personalizada. Entre
                  em contato conosco hoje mesmo e comece a aproveitar todos os
                  benefícios que a tecnologia tem a oferecer!
               </p>
               <p>
                  [Palavras-chave: tecnologia personalizada, soluções
                  tecnológicas, inteligência artificial, desenvolvimento de
                  aplicativos, criação de sites, empreendedor, profissional
                  autônomo, projetos personalizados, sucesso digital]
               </p>
            </Description>
         </Main>
         <Footer />
      </Container>
   );
}
