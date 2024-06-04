import ListingFactory from "~/Components/molecules/listing-factory";

export const BusinessDifferentials = () => {
    const differentials: Array<string> = [
        `Acesso Universal em Tempo Real: Com a PawKeepr, tenha acesso imediato às
    informações médicas do seu pet, onde quer que esteja.
        `,
        `Sincronização e Colaboração Simplificadas: Registros médicos atualizados 
        automaticamente em todas as consultas, facilitando a comunicação entre o tutor 
        e o veterinário.
        `,
        `Segurança e Privacidade: Investimos em segurança de dados para proteger as
        informações médicas do seu pet.
        `,
        `
        Interface Intuitiva e Usabilidade Adaptada: Plataforma fácil de usar, proporcionando 
        uma experiência fluida e otimizada, garantindo eficiência em visitas móveis.
        `,
        `Identidade e Preço Acessíveis: Marca que reflete os valores dos veterinários, com um 
        modelo de preço acessível, fortalecendo a conexão com clientes ao criar um perfil único.
        `,
        `Compatibilidade Móvel e Suporte: Acesse à PawKeepr em qualquer dispositivo móvel e 
        conte com suporte técnico contínuo e treinamento para maximizar o uso da plataforma.
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
