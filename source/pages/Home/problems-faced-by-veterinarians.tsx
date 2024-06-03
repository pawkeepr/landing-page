import ListingFactory from "~/Components/molecules/listing-factory";

export const ProblemsFacedByVeterinarians = () => {
    const problems: Array<string> = [
        `
    Usabilidade limitada: Plataformas convencionais são complexas e 
    dificultam o acesso rápido às informações do paciente durante 
    visitas domiciliares.  
`,
        `
        Identidade Genérica: As soluções existentes não refletem os 
        valores únicos dos veterinários domiciliares,  carecendo de 
        uma identidade personalizada.

`,
        `
Preços Inacessíveis: As soluções existentes são caras e inviáveis 
para veterinários autônomos ou iniciantes, limitando o acesso a 
ferramentas essenciais.
  
`,
    ];

    return (
        <>
            <ListingFactory
                title="Desafios enfrentados por veterinários domiciliares:"
                listPosition="right"
                items={problems}
            />
        </>
    );
};
