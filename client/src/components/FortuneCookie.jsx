import React, { useState } from 'react';
import classnames from 'classnames';

const FortuneCookie = ({ isOpen, handleClick, message }) => {
  const classes = classnames({
    FortuneCookie: true,
    'FortuneCookie--open': isOpen,
  });

  return (
    <>
      <div className={classes}>
        <img
          role="presentation"
          src={isOpen ? 'fortune-cookie-open.png' : 'fortune-cookie-closed.png'}
          alt="Fortune Cookie"
          onClick={handleClick}
          onKeyDown={() => { }}
        />
      </div>
      {
        isOpen && (
          <div className="FortuneCookieMessage">
            <p>{message}</p>
          </div>
        )
      }
    </>
  );
};

export default FortuneCookie;