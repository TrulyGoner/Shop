
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #2c3e50;
    --secondary-color: #ff6b6b;
    --accent-color: #4ecdc4;
    --bg-color: #f8f9fa;
    --text-color: #333;
    --font-family: 'Inter', sans-serif;
  }

  body {
    margin: auto;
    font-family: var(--font-family);
    line-height: 1.6;
    color: var(--text-color);
    background: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .flex-container {
    display: flex;
    flex-direction: row; /* or column, depending on your layout needs */
    justify-content: flex-start; /* or center, space-between, etc. */
    align-items: center; /* or flex-start, flex-end, etc. */
  }

  .container {
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .ProductsGrid {
      grid-template-columns: 1fr;
    }
  
    .Footer {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;