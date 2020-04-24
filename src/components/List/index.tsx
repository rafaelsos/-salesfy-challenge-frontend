import React, { LiHTMLAttributes } from 'react';
// import { useSelector } from 'react-redux';

// import { ApplicationState } from '../../store';
import { TranslateNumber } from '../../store/modules/translated/types';

import { Container } from './styles';

interface ListProps extends LiHTMLAttributes<HTMLLIElement> {
  data: TranslateNumber;
}

const List: React.FC<ListProps> = ({ data: item }) => {
  /*
  const [isCheck, setIsCheck] = useState(false);

  const listNumbers = useSelector(
    (state: ApplicationState) => state.translated.data,
  );

  useEffect(() => {
    const check = listNumbers.filter((num) => num.number === item.number);
    console.tron.log(check);
    if (check) {
      setIsCheck(true);
    }
  }, [item.number, listNumbers]);
  */
  return (
    <Container>
      <li>
        <span>
          Number
          {` ${item.number}`}
        </span>
        <strong>{item.description}</strong>
      </li>
    </Container>
  );
};

export default List;
