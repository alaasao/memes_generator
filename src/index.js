import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import Container from './components/container';

import { Parallax } from 'react-parallax';

const Page = () => (
    <Parallax className="jj" blur={0} bgImage="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2113&q=80" bgImageAlt="the cat" strength={1200}>
          <Nav />
    <Container/>
    </Parallax>
);
const Pagetwo = () => (
    <Parallax className="jj" blur={0} bgImage="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80" bgImageAlt="the cat" strength={1200}>
          <Nav />
    <Container/>
    </Parallax>
);
const root = document.getElementById('root')
ReactDOM.render(
  <>
    <Page />
    <Pagetwo />
  </>
 ,
  root
)