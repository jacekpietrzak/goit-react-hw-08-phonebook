import PropTypes from 'prop-types';

export function Loading({ text }) {
  return (
    <div>
      <p>Loading {text}...</p>
    </div>
  );
}

Loading.propTypes = {
  text: PropTypes.string,
};
