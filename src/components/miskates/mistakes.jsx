import React from 'react';
import PropTypes from 'prop-types';

const Mistakes = ({count}) => (
  <div className="game__mistakes">
    {count &&
      new Array(count).fill(``).map((item, index) => (
        <div className="wrong" key={`mistake-${index}`}></div>
      ))
    }
  </div>
);

Mistakes.propTypes = {
  count: PropTypes.number.isRequired,
};

export default React.memo(Mistakes);
