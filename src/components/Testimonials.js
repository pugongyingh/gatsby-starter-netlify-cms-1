import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { default as styled, css } from 'styled-components';

const Testimonials = ({ testimonials }) => (
  <div className="Testimonials">
    {testimonials.map(testimonial => (
      <article key={v4()} className="message">
        <div className="message-body" testForStyled>
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)



Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

const TestimonialsStyled = styled.div`
  background-color: red;
  
  ${props => props.testForStyled && css`
    background-color: blue; 
 `}
 `
export default TestimonialsStyled;
