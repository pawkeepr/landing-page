import ListingFactory from "~/Components/molecules/listing-factory";

export const Solutions = () => {
    const solutions: Array<string> = [
        `Acesso Universal em Tempo Real: Informações médicas acessíveis
    instantaneamente em qualquer lugar`,
        `Sincronização e Colaboração Simplificadas: Registros médicos atualizados 
        automaticamente em todas as consultas, facilitando a comunicação entre o 
        tutor e o veterinário.`,
        `Segurança e Privacidade: Investimos em segurança de dados para
        garantir a confidencialidade das informações médicas dos animais.
        `,
        `Interface Intuitiva: Plataforma fácil de usar para tutores e veterinários,
        simplificando o gerenciamento de informações médicas.
        `,
        `Identidade e Preço Acessíveis: Marca que reflete os valores dos veterinários, 
        com um modelo de preço acessível, fortalecendo a conexão com clientes ao criar 
        um perfil único.`,
        `Compatibilidade Móvel e Suporte: Acesse à PawKeepr em qualquer dispositivo móvel 
        e conte com suporte técnico contínuo e treinamento para maximizar o uso da plataforma.
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
