import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Home', () => {
  it('should work as expected', () => {
    render(<App />);
    expect(1 + 1).toBe(2);
  });
});
