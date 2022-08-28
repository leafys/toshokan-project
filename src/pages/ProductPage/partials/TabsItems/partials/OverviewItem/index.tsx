import { Link } from 'react-router-dom';
import { OverviewItemProps } from './OverviewItem.props';

const OverviewItem = ({ pathName, data }: OverviewItemProps): JSX.Element => {
  console.log(data);

  const setCurrentRalation = (source: any) =>
    localStorage.setItem('selectedСategory', source);

  return (
    <>
      {pathName === 'overview' && (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-lg">Relations</h1>

            {data?.relations.map((item: any, index: number) => (
              <div key={index} className="flex flex-col">
                <span className="text-color-blue">{item.relation}</span>

                {item.entry.map((entry: any) => (
                  <div key={entry.mal_id} className="flex flex-col">
                    <Link
                      onClick={() => setCurrentRalation(entry.type)}
                      to={`${entry.mal_id}`}
                    >
                      {entry.name}
                    </Link>

                    <span className="text-cyan-500">Source - {entry.type}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col gap-5">
            {data?.trailer?.embed_url ? (
              <>
                <h2 className="font-bold text-lg">Trailer</h2>

                <div className="max-w-[700px] h-[400px]">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={data.title_english}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto;height:100%;object-fit:cover;}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${data.trailer.embed_url}><img src=${data.trailer.images.maximum_image_url} alt='Preload video img'><span>▶</span></a>`}
                  ></iframe>
                </div>
              </>
            ) : (
              <h2 className="font-bold text-lg text-contrast-gray">
                Trailer not found
              </h2>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OverviewItem;
