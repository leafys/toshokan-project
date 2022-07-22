import MyButton from '@components/UI/buttons/MainButton';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { searchValue } from '@atoms/searchValueAtom';

const Search = (): JSX.Element => {
  const navigate = useNavigate();
  const setValue = useSetRecoilState(searchValue);

  const clearSearchAndBack = () => {
    setValue('');
    navigate('/');
  };

  return (
    <div className="search">
      <h1>Ты на серче епта</h1>

      <MyButton purple onClick={clearSearchAndBack}>
        Назад йопта
      </MyButton>
    </div>
  );
};

export default Search;
