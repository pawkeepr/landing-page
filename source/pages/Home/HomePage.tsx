/* eslint-disable @next/next/no-img-element */
"use client";

import { BtnLink } from "~/Components/atoms/btn";

import { FaStethoscope } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import HeaderTitle from "~/Components/atoms/header-title";
import NavbarHome from "~/Components/molecules/nav-bar-home";
import Footer from "~/Layouts/Footer";
import ListingFactory from "~/Components/molecules/listing-factory/listing-factory";

export const Solutions = () => {
    const solutions: Array<string> = [
        `Acesso Universal em Tempo Real: Informações médicas acessíveis
    instantaneamente em qualquer lugar`,
        `Sincronização Automática: Registros médicos atualizados
        automaticamente em todas as consultas.`,
        `Segurança e Privacidade: Investimos em segurança de dados para
        garantir a confidencialidade das informações médicas dos animais.`,
        `Interface Intuitiva: Plataforma fácil de usar para tutores e veterinários,
        simplificando o gerenciamento de informações médicas.
        `,
    ];

    return (
        <>
            <ListingFactory
                title="Qual o nosso diferencial?"
                listPosition="left"
                items={solutions}
            />
        </>
    );
};

export const BusinessDifferentials = () => {
    const differentials: Array<string> = [
        `Acesso Universal em Tempo Real: Com a PawKeepr, tenha acesso imediato às
    informações médicas do seu pet, onde quer que esteja.`,
        `Sincronização Automática: Registros médicos atualizados automaticamente em todas
        as consultas veterinárias.
        `,
        `Colaboração Simplificada: Facilitamos a comunicação entre você, o tutor, e o
        veterinário.
        `,
        `Segurança e Privacidade: Investimos em segurança de dados para proteger as
        informações médicas do seu pet.
        `,
        `Interface Intuitiva: Plataforma fácil de usar para uma experiência fluida tanto para
        você quanto para o seu veterinário.
        `,
        `Usabilidade Adaptada: Experiência otimizada para veterinários domiciliares,
        garantindo eficiência em visitas móveis.
        `,
        `Identidade Única: Marca que reflete os valores dos veterinários domiciliares,
        fortalecendo a conexão com clientes.
        `,
        `Preço Acessível: Modelo de preço acessível para todos os tipos de veterinários.
        `,
        `Compatibilidade Móvel: Acesso à PawKeepr em qualquer dispositivo móvel para
        flexibilidade
        `,
        `Suporte Contínuo: Oferecemos suporte técnico e treinamento para aproveitar
        todas as funcionalidades da plataforma.
        `,
    ];

    return (
        <>
            <ListingFactory
                title="Qual o nosso diferencial?"
                listPosition="right"
                items={differentials}
            />
        </>
    );
};

export const ProblemsFacedByBeginners = () => {
    const problems: Array<string> = [
        `Estabelecimento de Clientela: Iniciar um consultório veterinário
    ou serviço de atendimento domiciliar requer esforços de
    marketing e networking para atrair os primeiros clientes.`,
        `Falta de Experiência Prática: Veterinários podem se sentir
    inseguros em lidar com certos casos após a formação, exigindo
    tempo para ganhar confiança em suas habilidades práticas.
    `,
        `Administração do Negócio: Veterinários recém-formados
    podem enfrentar dificuldades na gestão do negócio, incluindo
    questões financeiras, contabilidade e gerenciamento de
    funcionários.`,
        `Equilíbrio Trabalho-Vida: O campo veterinário exige longas
horas de trabalho, afetando o equilíbrio pessoal,
especialmente para iniciantes.
`,
        `Investimentos em Equipamentos: Equipamentos
veterinários e instalações adequadas são caros,
especialmente para iniciantes sem acesso a financiamentos
favoráveis.
`,
        `Concorrência com Clínicas: Competir com clínicas
estabelecidas pode ser desafiador para novos profissionais
que buscam construir reputação.
`,
    ];

    return (
        <>
            <ListingFactory
                title="Problemas para quem está começando"
                listPosition="left"
                items={problems}
            />
        </>
    );
};

export const ProblemsFacedByVeterinarians = () => {
    const problems: Array<string> = [
        `
    Limitações de Usabilidade: Plataformas convencionais não são
    adequadas para visitas domiciliares, resultando em interfaces
    complexas e dificultando o acesso rápido às informações do
    paciente.   
`,
        `
Falta de Identidade Específica: As soluções disponíveis não
refletem as práticas e valores únicos dos veterinários domiciliares,
carecendo de uma identidade personalizada.

`,
        `
Preços Inacessíveis: As soluções existentes são caras, tornando-as
inviáveis para veterinários autônomos ou em início de carreira,
limitando o acesso a ferramentas essenciais para o atendimento
domiciliar.
  
`,
    ];

    return (
        <>
            <ListingFactory
                title="Os principais problemas enfrentados por esses veterinários incluem:"
                listPosition="right"
                items={problems}
            />
        </>
    );
};

export const ButtonsNavBar = () => {
    return (
        <div className="flex items-center justify-center w-full gap-2">
            <BtnLink
                message="Saiba + Tutor"
                className="text-gray-500 hover:!bg-secondary-500 !border-secondary-500 border-0 w-32 mobile:border-0"
                href="/tutor/landing-page"
            >
                <MdPerson className="w-6 h-6" />
            </BtnLink>
            <BtnLink
                message="Saiba + Vet"
                className="border-primary-600 hover:!bg-secondary-500 border-0 w-32 mobile:border-0"
                href="/veterinary/landing-page"
            >
                {/* icon de cadastro */}
                <FaStethoscope className="w-6 h-4" />
            </BtnLink>
        </div>
    );
};

const HomePage = () => {
    return (
        <>
            <NavbarHome />
            <section className="min-h-screen section bg-primary-500" id="hero">
                <HeaderTitle title="HOME" />
                <div className="bg-overlay bg-overlay-pattern" />

                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                {`
                                    Imagine realizar uma consulta completa em no máximo 5 minutos, 
                                    sem sacrificar a qualidade do atendimento. 
                                    Com nosso aplicativo inovador, você terá acesso a recursos poderosos 
                                    na palma da sua mão.
                                `}
                            </p>
                            <ButtonsNavBar />
                        </div>
                    </Zoom>
                </div>
                <div className="fixed inset-x-0 bottom-0">
                    <Footer />
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 place-items-center md:mt-0 md:grid-cols-2 p-4">
                    <Zoom>
                        <div className="flex items-center text-center col-span-1">
                            <p className="text-lg lg:text-2xl font-semibold font-sans p-4">
                                {`
                                  Nossa startup preenche uma lacuna no mercado, fornecendo uma
                                  plataforma adaptada para médicos veterinários que atendem a domicílio e
                                  aqueles que estão iniciando. Enquanto as soluções existentes se concentram
                                  em clínicas estabelecidas, nosso aplicativo é uma ferramenta específica para
                                  esses profissionais, permitindo que eles forneçam cuidados de qualidade aos
                                  animais de estimação diretamente em seus lares, com uma ferramenta
                                  simples e intuitiva.
                                `}
                            </p>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-02.webp"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <ProblemsFacedByVeterinarians />
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 place-items-center md:mt-0 md:grid-cols-2 p-4">
                    <div className="flex items-center text-center col-span-1">
                        <ProblemsFacedByBeginners />
                    </div>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-02.webp"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/dog_primary.png"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                {`
                                   PawKeepr é uma solução personalizada para veterinários que oferecem
                                   cuidados de qualidade diretamente nas residências dos animais de estimação.
                             
                                `}
                            </p>
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">{`
                                    Nossa plataforma adapta-se às necessidades específicas desses profissionais,
                                    proporcionando usabilidade excepcional, identidade exclusiva e preços
                                    acessíveis.
                                `}</p>
                            <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">{`      
                                   Compatível com tablets, celulares e computadores, facilita o gerenciamento de
                                   informações do paciente e a comunicação com os clientes, permitindo que os
                                   veterinários se concentrem em oferecer os melhores cuidados possíveis, onde
                                   quer que estejam.`}</p>
                        </div>
                    </Zoom>
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 place-items-center md:mt-0 md:grid-cols-2 p-4">
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="text-lg lg:text-xl font-semibold font-sans p-4">{`      
                                 A PawKeepr é uma startup que resolve um problema significativo para veterinários que
                                 oferecem atendimento domiciliar a animais de estimação. Tradicionalmente, esses
                                 profissionais enfrentam dificuldades devido à falta de soluções específicas no mercado.
                                 `}</p>
                            <p className="text-lg lg:text-xl font-semibold font-sans p-4">{`      
                                   A PawKeepr preenche essa lacuna com uma plataforma adaptada, oferecendo
                                   usabilidade otimizada, identidade única e preço acessível. Isso permite aos veterinários
                                   domiciliares gerenciar facilmente informações dos pacientes, se comunicar com os
                                   clientes e melhorar a qualidade dos cuidados.
                                   `}</p>
                            <p className="text-lg lg:text-xl font-semibold font-sans p-4">{`      
                                   Com a PawKeepr, os veterinários podem acessar rapidamente as informações médicas
                                   dos pets, sincronizar automaticamente os dados, colaborar eficientemente com os
                                   tutores e focar completamente em oferecer os melhores cuidados possíveis aos
                                   animais, onde quer que estejam.`}</p>
                        </div>
                    </Zoom>

                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/cat_secondary.png"
                                className="w-100 h-[90%] !border-none rounded-3xl"
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <BusinessDifferentials />
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 place-items-center md:mt-0 md:grid-cols-2 p-4">
                    <div className="col-span-1 pt-5 text-center mt-lg-5">
                        <Solutions />
                        <Zoom>
                            <p className="text-lg lg:text-2xl font-semibold font-sans p-4">
                                {`
                                 Nossa solução resolve o problema de acesso restrito às informações
                                 médicas dos pets, permitindo compartilhamento fácil entre tutores e
                                 veterinários. Em resumo, a PawKeepr promove cuidados de qualidade e
                                 acessíveis por meio de uma abordagem centrada no cliente para o
                                 compartilhamento de informações médicas.
                                `}
                            </p>
                        </Zoom>
                    </div>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/jabuti-secondary.png"
                                className="w-100 "
                                alt="..."
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <h2 className="text-center p-1 font-sans text-lg font-semibold text-white lg:text-2xl">
                    Por que usar?
                </h2>
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 web:grid-cols-2">
                    <Zoom right>
                        <div className="col-span-1 pt-5 mt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-5">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 1. Com nosso app, você terá acesso
                                 instantâneo às informações médicas
                                 dos seus pacientes, eliminando a
                                 espera por transferências de arquivos
                                 ou consultas adicionais, garantindo
                                 um atendimento mais eficiente e
                                 preciso.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1 hidden lg:block">
                            <img
                                src="/bg-three.jpg"
                                className="w-[75%]"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
                <div className="grid grid-cols-1 p-2 web:grid-cols-2">
                    <Slide right>
                        <div className="col-span-1">
                            <img
                                src="/Sem título.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom left>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-2">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 2. Nossa plataforma oferece uma
                                 sincronização automática de dados em
                                 todas as consultas veterinárias,
                                 garantindo que seus registros estejam
                                 sempre atualizados e disponíveis para
                                 consulta imediata, economizando tempo
                                 e melhorando a eficiência do
                                 atendimento
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom right>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-2">
                                <p className=" p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 3. Facilitamos a colaboração entre você e
                                 seus clientes, permitindo que ambos
                                 compartilhem insights e informações
                                 vitais para o cuidado dos pets,
                                 promovendo uma abordagem mais
                                 integrada e holística no tratamento
                                 animal..
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/landing-page-01.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Slide right>
                        <div className="col-span-1">
                            <img
                                src="/icon-pet/teiu-primary.png"
                                className="w-[60%]"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                    <Zoom left>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-2">
                                <p className="p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 4. Investimos pesadamente em
                                 protocolos de segurança de dados
                                 para garantir a privacidade e a
                                 segurança das informações médicas
                                 dos pets, garantindo que seus
                                 registros estejam protegidos contra
                                 acessos não autorizados.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom right>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <div className="bg-secondary rounded-xl w-3/4 shadow-md m-2">
                                <p className=" p-4 font-sans text-lg font-semibold text-white lg:text-2xl">
                                    {`
                                 5 .Com uma interface intuitiva e
                                 amigável, o PawKeepr oferece uma
                                 experiência de usuário fluida,
                                 tornando o gerenciamento de
                                 informações médicas de pets simples
                                 e acessível para todos, por um preço
                                 acessível de apenas $ 0,99 por
                                 consulta.
                                
                                    `}
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/Sem título2.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section pb-0 hero-section bg-white">
                <div className="grid grid-cols-1 p-4 web:grid-cols-2">
                    <Zoom>
                        <div className="col-span-1 pt-5 text-center mt-lg-5">
                            <p className="p-2 font-sans text-lg font-semibold lg:text-2xl">
                                {`Roadmap`}
                            </p>
                            <div className="w-3/6 flex justify-start">
                                <div className="bg-secondary rounded-xl shadow-md m-2">
                                    <p className="p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Inteligência Artificial Abril de 2025`}
                                    </p>
                                </div>
                            </div>
                            <div className="w-4/6 flex justify-end">
                                <div className="bg-secondary rounded-xl shadow-md m-2">
                                    <p className=" p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`VetMovel e Telemedicina Dezembro de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="w-5/6 flex justify-end">
                                <div className="bg-secondary rounded-xl shadow-md m-2">
                                    <p className=" p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Secretaria Inteligente Agosto de 2024`}
                                    </p>
                                </div>
                            </div>
                            <div className="w-6/6 flex justify-end">
                                <div className="bg-secondary rounded-xl shadow-md m-2">
                                    <p className=" p-3 font-sans text-lg font-semibold text-white lg:text-xl">
                                        {`Consultas veterinárias Abril de 2024`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Slide left>
                        <div className="col-span-1">
                            <img
                                src="/Sem título2.jpg"
                                className="w-100"
                                alt="Landing Page"
                            />
                        </div>
                    </Slide>
                </div>
            </section>

            <section className="section bg-primary-500">
                <div className="bg-overlay bg-overlay-pattern" />
                <div className="grid grid-cols-1 p-4 mt-5 web:grid-cols-2">
                    <Slide left>
                        <div className="col-span-1 rounded-md">
                            <div className="flex justify-center">
                                <div className="bg-white flex flex-col gap-4 items-center justify-center rounded-lg p-4 w-1/2 h-[400px]">
                                    <h3 className="lg:text-5xl text-gray-500">
                                        Grátis
                                    </h3>
                                    <p className="lg:text-4xl text-primary">
                                        $ 0,00
                                    </p>
                                    <p className="lg:text-xl">
                                        Faça 30 consultas grátis
                                    </p>
                                    <p className="lg:text-md">
                                        Tenha acesso a todos os recursos sem
                                        limitação
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex justify-center">
                                <div className="bg-white flex flex-col gap-4 items-center justify-center rounded-lg p-4 w-1/2 h-[400px]">
                                    <h3 className="lg:text-5xl text-gray-500">
                                        Premium
                                    </h3>
                                    <p className="lg:text-4xl text-primary">
                                        $ 0,99
                                    </p>
                                    <p className="lg:text-xl text-gray-700">
                                        Pague menos de 1 dólar por consulta
                                        realizada.
                                    </p>
                                    <p className="lg:text-md text-gray-700">
                                        Tenha acesso a todos os recursos sem
                                        limitação
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
        </>
    );
};

export default HomePage;
