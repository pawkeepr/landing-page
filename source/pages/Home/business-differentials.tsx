import ListingFactory from "~/Components/molecules/listing-factory";

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
