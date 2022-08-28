type CharacterItemImages = {
  webp: {
    image_url: string;
  };

  jpg: {
    image_url: string;
  };
};

type CharacterInfo = {
  mal_id: number;
  images: CharacterItemImages;
  name: string;
};

type PersonInfo = {
  mal_id: number;
  name: string;
  url: string;
  images: CharacterItemImages;
};

export interface CharacterVoiceActorsInfo {
  language: string;
  person: PersonInfo;
}

export interface CharacterItemData {
  character: CharacterInfo;
  role: string;
  voice_actors: CharacterVoiceActorsInfo[];
}

export interface ICharacterItemProps {
  data: CharacterItemData[];
  pathName: string;
}
