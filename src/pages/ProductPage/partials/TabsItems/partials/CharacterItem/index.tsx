import PreloadImage from '@components/PreloadImage';
import styles from './CharacterItem.module.scss';
import { CharacterItemData, ICharacterItemProps } from './ICharacterItemProps';

const CharacterItem = ({
  pathName,
  data,
}: ICharacterItemProps): JSX.Element => {
  return (
    <>
      {pathName === 'characters' && (
        <div className={styles['character-template']}>
          {data.map((item: CharacterItemData) => (
            <div
              key={item.character.mal_id}
              className="flex bg-product-page-bg rounded-md p-2 w-[316px] h-[106px]"
            >
              <>
                <div className="flex gap-2 basis-1/2 justify-start">
                  <PreloadImage
                    src={item.character.images.webp.image_url}
                    preloadClassname="w-[60px] h-[90px]"
                    mainClassname="max-w-[60px] w-full max-h-[90px] h-full object-cover"
                    alt="characterImage"
                  />

                  <div className="flex flex-col justify-between text-sm">
                    <span>{item.character.name}</span>

                    <span>{item.role}</span>
                  </div>
                </div>

                {item.voice_actors[0] && (
                  <div className="flex gap-2 basis-1/2 justify-end">
                    <div className="flex flex-col justify-between text-sm text-right">
                      <span>{item.voice_actors[0]?.person.name}</span>

                      <span>{item.voice_actors[0]?.language}</span>
                    </div>

                    <PreloadImage
                      src={item.voice_actors[0]?.person.images.jpg.image_url}
                      preloadClassname="w-[60px] h-[90px]"
                      mainClassname="max-w-[60px] w-full max-h-[90px] h-full object-cover"
                      alt="voiceActorImage"
                    />
                  </div>
                )}
              </>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CharacterItem;
