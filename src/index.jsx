import React from 'react';
import ReactDOM from 'react-dom';
import Post from '@models/Post';
import Logo from './JavaScript-logo.png';
import './example';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';

const post = new Post('New post', Logo);

const App = () => (
  <div className='container'>
    <h1>Webpack</h1>
    <div className='logo'></div>
    <div className='data code'>{post.toString()}</div>
    <div className='box'>
      <h2>Less</h2>
    </div>
    <div className='card'>
      <h2>SCSS</h2>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
