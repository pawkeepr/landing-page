import ListingFactory from "~/Components/molecules/listing-factory";

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
