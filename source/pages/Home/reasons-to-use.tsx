import { TextImagePattern } from "~/Components/molecules/text-image-pattern";
import { TextImagePatternProps } from "~/Components/molecules/text-image-pattern";

const reasons = [
    {
        text: `1. Com nosso app, você terá acesso
    instantâneo às informações médicas
    dos seus pacientes, eliminando a
    espera por transferências de arquivos
    ou consultas adicionais, garantindo
    um atendimento mais eficiente e
    preciso.`,
        imagePath: `/bg-three.jpg`,
        pattern: "textLeftImageRight",
    },
    {
        text: `2. Nossa plataforma oferece uma
        sincronização automática de dados em
        todas as consultas veterinárias,
        garantindo que seus registros estejam
        sempre atualizados e disponíveis para
        consulta imediata, economizando tempo
        e melhorando a eficiência do
        atendimento`,
        imagePath: `/Sem título.jpg`,
        pattern: "textRightImageLeft",
    },
    {
        text: `
        3. Facilitamos a colaboração entre você e
        seus clientes, permitindo que ambos
        compartilhem insights e informações
        vitais para o cuidado dos pets,
        promovendo uma abordagem mais
        integrada e holística no tratamento
        animal..
       
           `,
        imagePath: `/landing-page-01.jpg`,
        pattern: "textLeftImageRight",
    },
    {
        text: `
        4. Investimos pesadamente em
        protocolos de segurança de dados
        para garantir a privacidade e a
        segurança das informações médicas
        dos pets, garantindo que seus
        registros estejam protegidos contra
        acessos não autorizados.
       
           `,
        imagePath: `/icon-pet/teiu-primary.png`,
        pattern: "textRightImageLeft",
    },
    {
        text: `
        5 .Com uma interface intuitiva e
        amigável, o PawKeepr oferece uma
        experiência de usuário fluida,
        tornando o gerenciamento de
        informações médicas de pets simples
        e acessível para todos, por um preço
        acessível de apenas $ 0,99 por
        consulta.
       
           `,
        imagePath: `/Sem título2.jpg`,
        pattern: "textLeftImageRight",
    },
] satisfies Array<TextImagePatternProps>

export const ReasonsToUse = () => {
    return (
        <>
        {reasons.map((reason, index: number) => {
            return (
                <TextImagePattern
                    key={index}
                    pattern={reason.pattern}
                    text={reason.text}
                    imagePath={reason.imagePath}
                />
            )
        })}
        </>
    );
};
