import {useEffect, useState} from 'react';
import '../css/LandingPage.css';
import {useCocktailAPi} from '../hooks/useCocktailAPI';
import {Loader} from '../components';

export function LandingPage() {
  const {getRandomCocktail} = useCocktailAPi();
  const [titleStr, setTitleStr] = useState('');
  const [imgStr, setImgStr] = useState('');
  const [newDrinkDummy, setNewDrinkDummy] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRandomCocktail()
      .then(({imgUrl, id, title}) => {
        setImgStr(imgUrl);
        setTitleStr(title);
      })
      .then(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newDrinkDummy]);
  if (loading) {
    return (
      <section className='landing-page'>
        <Loader />
      </section>
    );
  }

  return (
    <section className='landing-page'>
      <article className='card'>
        <p className='title'>{titleStr}</p>
        <div className='img' style={{backgroundImage: `url(${imgStr})`}} />
        <button className='btn btn-more'>Read more...</button>
      </article>
      <button
        onClick={() => setNewDrinkDummy(prev => !prev)}
        className='btn btn-new'>
        Get me a different one!
      </button>
    </section>
  );
}
