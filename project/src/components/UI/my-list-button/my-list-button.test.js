import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {render, screen} from '@testing-library/react';
import MyListButton from './my-list-button';

const mockStore = configureStore({});

describe('Component: MyListButton', () => {
  it('should render "MyListButtonComponent"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <MyListButton filmId={1} isFavorite isPromo />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
});
