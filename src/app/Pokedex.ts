export interface Pokemon {
    sprites: any;
    name: string;
    id: number;
    height: number;
    weight: number;
    img: string;
    abilities: [{
      ability: {
        name : string;
      }
      slot: 1;
    },
    {
      ability: {
        name : string
      }
      slot: 2;
    }
  ];
}