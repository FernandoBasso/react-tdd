import React from 'react';
import { render, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Countdown from './Countdown';

jest.useFakeTimers();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('countdown()', () => {
  it('should render', () => {
    render(<Countdown />)
  });

  it('should render nothing initially', () => {
    const wrp = mount(<Countdown />);
    expect(wrp.isEmptyRender()).toBe(true);
  });

  it('should render with null and 2', () => {
    const ini = 2;
    const wrp = mount(<Countdown ini={ ini } />);

    expect(wrp.isEmptyRender()).toBe(true);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    wrp.update();
    expect(wrp.text()).toContain(String(ini));
  });

  it('should render from 3 to 0 and then null', () => {
    const wrp = mount(<Countdown ini={ 3 } />);

    expect(wrp.isEmptyRender()).toBe(true);

    for (let i = 3; i >= 0; --i) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });

      wrp.update();
      expect(wrp.text()).toContain(String(i));
    }
  });
});


