import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Login from './login';

const mockStore = configureStore({});

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Login />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'pavel');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/pavel/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
