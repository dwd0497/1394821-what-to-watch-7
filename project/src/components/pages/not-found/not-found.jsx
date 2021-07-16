import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Logo from '../../UI/logo/logo';
import User from '../../UI/user/user';
import Footer from '../../UI/footer/footer';

import {AppRoute} from '../../../const';

const Title = styled.h1`
    font-size: 30px;
    line-height: 36px;
    font-weight: 300;
`;

const Container = styled.div`
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
    margin: auto;
    text-align: center;
`;

function NotFound() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <User />
      </header>

      <Container>
        <Title>404 Not Found</Title>
        <Link to={AppRoute.MAIN}>To home</Link>
      </Container>

      <Footer />
    </div>
  );
}

export default NotFound;
