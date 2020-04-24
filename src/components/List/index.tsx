import React, { LiHTMLAttributes } from 'react';

import { TranslateNumber } from '../../store/modules/translated/types';

import { Container } from './styles';

interface ListProps extends LiHTMLAttributes<HTMLLIElement> {
  data: TranslateNumber;
}

const List: React.FC<ListProps> = ({ data: item }) => {
  return (
    <Container check={item.check}>
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
