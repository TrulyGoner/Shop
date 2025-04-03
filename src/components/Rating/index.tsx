import styled from 'styled-components';

const Star = styled.span`
  color: #ffd700;
  margin-right: 0.5rem;
`;

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <Star key={i}>
          ★
        </Star>
      ))}
      <span>({rating})</span>
    </div>
  );
};