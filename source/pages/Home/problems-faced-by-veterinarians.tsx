import ListingFactory from "~/Components/molecules/listing-factory";

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
