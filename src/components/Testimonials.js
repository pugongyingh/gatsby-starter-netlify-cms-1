import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { styled } from 'styled-components';

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article key={v4()} className="message">
        <div className="message-body">
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
const TestimonialsStyled = styled(Testimonials)`
    .message-body {
      background-color: red;
    }
`;

export default TestimonialsStyled;
