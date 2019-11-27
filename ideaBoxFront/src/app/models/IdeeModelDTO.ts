export interface IdeeModelFromDB {

    id: number;
    description: string;
    titre: string;
    collaborateurIds: Set<number>;
    membreId: number;
    categorieId: number;
    score: number;
    createdAt: Date;
}
