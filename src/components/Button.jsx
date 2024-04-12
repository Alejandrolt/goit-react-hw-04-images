import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const ButtonLoad = styled.button`
  background-color: #0e78a3;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  font-size: 15px;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 30px;
  &:hover {
    background-color: #034403;
  }
`;

const Button = ({ onClick }) => (
  <ButtonLoad className="load-more-button" onClick={onClick}>
    Load More
  </ButtonLoad>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
