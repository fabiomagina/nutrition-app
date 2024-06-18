interface IRefeicao {
    id: string;
    nome: string;
    descricao?: string;
    disponivel?: boolean;
    data?: Date;
    userId: string;
    alimentos: IItemRefeicao[]
}

