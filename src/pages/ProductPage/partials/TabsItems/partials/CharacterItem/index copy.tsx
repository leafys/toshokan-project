import React from 'react';
import styles from './CharacterItem.module.scss';
import { CharacterItemData, ICharacterItemProps } from './ICharacterItemProps';

const CharacterItem = ({
  pathName,
  data,
}: ICharacterItemProps): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<string>('Japanese');
  const [imgLoaded, setImgLoaded] = React.useState<boolean>(true);

  return (
    <>
      {pathName === 'characters' && (
        <>
          <div className="flex justify-end pb-5">
            <select
              value={selectedLanguage}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectedLanguage(e.target.value)
              }
              className="bg-product-page-bg rounded-md p-2"
            >
              <option value="Japanese">Japanese</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="Portuguese">Portuguese (BR)</option>
            </select>
          </div>

          <div className={styles['character-template']}>
            {data.map((item: CharacterItemData) => (
              <div
                key={item.character.mal_id}
                className="flex  bg-product-page-bg rounded-md p-2"
              >
                <>
                  <div className="flex gap-2 basis-1/2 justify-start">
                    <img
                      onLoad={() => setImgLoaded(false)}
                      className={
                        imgLoaded
                          ? 'bg-gray w-[60px] h-[90px]'
                          : 'max-w-[60px] w-full max-h-[90px] h-full object-cover'
                      }
                      src={item.character.images.webp.image_url}
                      alt="teasdt"
                    />
                    <div className="flex flex-col justify-between text-sm">
                      <span>{item.character.name}</span>

                      <span>{item.role}</span>
                    </div>
                  </div>

                  {item.voice_actors
                    .filter((item) => item.language === selectedLanguage)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-2 basis-1/2 justify-end"
                      >
                        <div className="flex flex-col justify-between text-sm text-right">
                          <span>{item.person.name}</span>

                          <span>{item.language}</span>
                        </div>

                        <img
                          onLoad={() => setImgLoaded(false)}
                          className={
                            imgLoaded
                              ? 'bg-gray w-[60px] h-[90px]'
                              : 'max-w-[60px] w-full max-h-[90px] h-full object-cover'
                          }
                          src={item.person.images.jpg.image_url}
                          alt="teasdt"
                        />
                      </div>
                    ))}
                </>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CharacterItem;
