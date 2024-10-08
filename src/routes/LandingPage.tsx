import {useEffect, useState} from 'react';
import '../css/LandingPage.css';
import {useCocktailAPi} from '../hooks/useCocktailAPI';
import {Loader} from '../components';
import {useNavigate} from 'react-router-dom';

export function LandingPage() {
  const {getRandomCocktail} = useCocktailAPi();
  const [titleStr, setTitleStr] = useState('');
  const [imgStr, setImgStr] = useState('');
  const [drinkId, setDrinkId] = useState('');
  const [newDrinkDummy, setNewDrinkDummy] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getRandomCocktail()
      .then(({imgUrl, id, title}) => {
        setImgStr(imgUrl);
        setTitleStr(title);
        setDrinkId(id);
      })
      .then(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newDrinkDummy]);

  const getNewDrink = () => setNewDrinkDummy(!newDrinkDummy);

  const goToDrink = () => navigate(`/info/${drinkId}`);

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
        <button onClick={goToDrink} className='btn btn-more'>
          Read more...
        </button>
      </article>
      <button onClick={getNewDrink} className='btn btn-new'>
        Get me a different one!
      </button>
    </section>
  );
}
