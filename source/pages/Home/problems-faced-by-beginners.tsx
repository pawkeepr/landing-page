import ListingFactory from "~/Components/molecules/listing-factory";

export const ProblemsFacedByBeginners = () => {
    const problems: Array<string> = [
        `Estabelecimento de Clientela: Marketing e networking são 
        essenciais para atrair os primeiros clientes.`,

        `Falta de Experiência Prática:  Ganhar confiança após a 
        formação é fundamental para lidar com casos diversos.
    `,
        `Administração do Negócio: Gestão financeira, contabilidade 
        e gerenciamento de funcionários são desafios comuns enfrentados`,

        `Equilíbrio Trabalho-Vida: O campo veterinário exige longas
horas de trabalho, afetando o equilíbrio pessoal,
especialmente para iniciantes.
`,
        `Investimentos em Equipamentos: Equipamentos veterinários são 
        caros e representam um contratempo financeiro para esses profissionais.
`,
        `Concorrência com Clínicas: Competir com clínicas estabelecidas 
        requer esforços adicionais para construir reputação.
`,
    ];

    return (
        <>
            <ListingFactory
                title="Desafios enfrentados por veterinários iniciantes"
                listPosition="left"
                items={problems}
            />
        </>
    );
};
