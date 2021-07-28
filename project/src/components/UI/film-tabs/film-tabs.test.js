import React from 'react';
import {render, screen} from '@testing-library/react';
import FilmTabs from './film-tabs';

describe('Component: FilmTabs', () => {
  it('should render "FilmTabsComponent"', () => {
    const film = {
      id: 1,
      name: 'name',
      posterImage: 'posterImage',
      previewImage: 'previewImage',
      backgroundImage: 'backgroundImage',
      backgroundColor: 'backgroundColor',
      videoLink: 'videoLink',
      previewVideoLink: 'previewVideoLink',
      description: 'description',
      rating: 10,
      scoresCount: 777,
      director: 'director',
      starring: [],
      runTime: 120,
      genre:'genre',
      released: 2020,
      isFavorite: true,
    };
    render(
      <FilmTabs film={film} comments={[]} />,
    );

    expect(screen.getByText(/Very good/i)).toBeInTheDocument();
    expect(screen.getByText(/ratings/i)).toBeInTheDocument();
    expect(screen.getByText(/Director:/i)).toBeInTheDocument();
    expect(screen.getByText(/Starring:/i)).toBeInTheDocument();
    expect(screen.getByText(/Director/i)).toBeInTheDocument();
    expect(screen.getByText(/Starring/i)).toBeInTheDocument();
    // expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
    // expect(screen.getByText(/Genre/i)).toBeInTheDocument();
    // expect(screen.getByText(/Released/i)).toBeInTheDocument();
  });
});
