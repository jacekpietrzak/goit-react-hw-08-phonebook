import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

Button.propTypes = {
  text: PropTypes.string,
};
