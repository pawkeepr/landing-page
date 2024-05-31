import ListingFactory from "~/Components/molecules/listing-factory";

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
