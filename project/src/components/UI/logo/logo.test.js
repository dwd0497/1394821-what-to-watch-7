import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render "LogoComponent"', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Logo />
      </Router>,
    );

    expect(screen.getAllByText(/W/i)).toHaveLength(2);
    expect(screen.getByText(/T/i)).toBeInTheDocument();
  });
});
