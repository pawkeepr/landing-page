import ListingFactory from "~/Components/molecules/listing-factory";

export const ProblemsFacedByBeginners = () => {
    const problems: Array<string> = [
        `Estabelecimento de Clientela: Marketing e networking são 
        essenciais para construir reputação e atrair os primeiros clientes, 
        competindo com clínicas estabelecidas.`,

        `Falta de Experiência Prática:  Ganhar confiança após a 
        formação é fundamental para lidar com casos diversos.
    `,
        `Administração do Negócio: Gestão financeira, contabilidade, 
        gerenciamento de funcionários e equilíbrio entre  trabalho e 
        vida pessoal são desafios comuns enfrentados, principalmente 
        por iniciantes`,

        `Investimentos em Equipamentos: Equipamentos veterinários são 
        caros e representam um contratempo financeiro para esses profissionais.
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
