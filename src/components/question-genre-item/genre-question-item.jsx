import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionItem = ({track, id, renderPlayer, onAnswerOptionChange, answer}) => (
  <div className="track" key={track.id}>
    {renderPlayer(track.src, id)}
    <div className="game__answer">
      <input className="game__input visually-hidden" type="checkbox" name="answer"
        value={`answer-${id}`}
        id={`answer-${id}`}
        onChange={(evt) => {
          onAnswerOptionChange(evt.target.checked, id);
        }}
        checked={answer}
      />
      <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
    </div>
  </div>
);

GenreQuestionItem.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    genre: PropTypes.string,
    src: PropTypes.string,
  }),
  onAnswerOptionChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  id: PropTypes.number,
  answer: PropTypes.bool,
};

export default React.memo(GenreQuestionItem);
