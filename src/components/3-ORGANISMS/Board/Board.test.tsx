import React, { useState } from 'react';
import Enzyme, { shallow } from 'enzyme';
import { renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';

import Board from './Board';
import data from '../../../datas/cards.json';
import { CardType } from '../../../interfaces/Cards';

Enzyme.configure({ adapter: new Adapter() });

describe('component: Board', () => {
  const wrapper = shallow(<Board
    points={1}
    endGame={false}
    startGame
    backCard="test"
    cards={[]}
    // eslint-disable-next-line react/jsx-no-bind, @typescript-eslint/no-unused-vars
    setPoints={function (value: React.SetStateAction<number>): void {
      throw new Error('Function not implemented.');
    }}
  />);

  describe('contains a board', () => {
    test('should have a Board (.board)', () => {
      const result = wrapper.find('.board');

      expect(result).toHaveLength(1);
    });
  });

  describe('tests about datas', () => {
    test('should state has same length that data.cards', () => {
      const { result } = renderHook(() => {
        const [shuffleCards, setShuffleCards] = useState<CardType[]>([]);
        React.useEffect(() => {
          setShuffleCards([...data.cards]);
        }, []);

        return shuffleCards;
      });

      expect(result.current).toHaveLength(data.cards.length);
    });
  });
});
