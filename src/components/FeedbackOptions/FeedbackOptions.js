import React from 'react';
import PropTypes from 'prop-types';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => (
  <button
    type="button"
    key={feedback}
    data-feedback={feedback}
    onClick={onLeaveFeedback}
  >
    {feedback}
  </button>
);

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackButton feedback={option} onLeaveFeedback={onLeaveFeedback} />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
