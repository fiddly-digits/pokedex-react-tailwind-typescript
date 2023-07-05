import { useEffect, useState } from 'react';
import PokeCard from './components/PokeCard';
import { Pokemons } from './types/common.types';

function App() {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((response) => {
        setPokemons(response.results);
      });
  }, []);

  return (
    <main className='flex flex-col w-screen min-h-screen gap-10 bg-red-400'>
      <header className='flex justify-center w-screen pt-10'>
        <img
          src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
          alt='pokeapi'
        />
      </header>
      <section className='grid grid-cols-3 gap-2 md:grid-cols-3 md:p-10 lg:grid-cols-5 md:gap-4'>
        {pokemons.map((pokemon) => {
          return (
            <PokeCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
          );
        })}
      </section>
    </main>
  );
}

export default App;
