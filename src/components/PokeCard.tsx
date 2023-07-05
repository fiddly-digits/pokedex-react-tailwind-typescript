import { useEffect, useState } from 'react';
import { Pokemon, typeColors } from '../types/common.types';

interface Props {
  name: string;
  url: string;
}

export default function PokeCard(props: Props) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((response) => setPokemon(response));
  }, [props.url]);
  return (
    <article className='block rounded-lg bg-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700/10 max-w[182px]'>
      <div className='flex items-center justify-center'>
        <img
          className='text-center'
          src={pokemon?.sprites?.front_default}
          alt=''
        />
      </div>

      <div className='p-6'>
        <h5 className='mb-2 text-lg font-semibold leading-tight text-center text-neutral-800 dark:text-neutral-50'>
          {props.name.toUpperCase()}
        </h5>
        <div className='flex justify-center gap-5'>
          {pokemon?.types?.map((obj) => {
            return (
              <p className={typeColors[obj.type.name as keyof object]}>
                {obj.type.name.replace(/\w/, (firstLetter) =>
                  firstLetter.toUpperCase()
                )}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
