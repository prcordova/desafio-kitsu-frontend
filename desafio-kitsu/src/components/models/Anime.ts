export interface Anime {
  animes: {
    id: string;
    type: string;
    attributes: {
      createdAt: string;
      updatedAt: string;
      slug: string;
      synopsis: string;
      description: string;
      coverImageTopOffset: number;
    };
  };
}
