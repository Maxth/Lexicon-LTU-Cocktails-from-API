import {useEffect, useState} from 'react';
import '../css/SearchPage.css';
import {CocktailList} from '../components';
import {useCocktailAPi} from '../hooks/useCocktailAPI';
import _ from 'lodash';

export function SearchPage() {
  const {searchCocktail} = useCocktailAPi();
  const [listData, setListData] = useState<{name: string; id: string}[]>();
  const [loading, setLoading] = useState(false);

  const debouncedSearch: _.DebouncedFunc<
    React.ChangeEventHandler<HTMLInputElement>
  > = _.debounce(e => {
    if (e.target.value) {
      setLoading(true);
      searchCocktail(e.target.value)
        .then(data => setListData(data))
        .then(() => setLoading(false));
    }
  }, 600);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='search-page'>
      <div className='input-container'>
        <label htmlFor='search'>Search for cocktails</label>
        <input
          id='search'
          className='input'
          autoFocus
          onChange={debouncedSearch}
        />
      </div>

      <CocktailList loading={loading} data={listData} />
    </section>
  );
}
