export type CardType = {
  id: number;
  name: string;
  flip: boolean;
  find: boolean;
};

export type ObjectType = {
  backCard: string,
  cards: CardType[],
  timer : number
};
