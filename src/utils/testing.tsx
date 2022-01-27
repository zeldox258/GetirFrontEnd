import { Queries, queries, render, RenderOptions, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../store/store';
import theme from '../theme';

export const renderWithThemeAndStore = <Q extends Queries = typeof queries, Container extends Element | DocumentFragment = HTMLElement>(ui: React.ReactElement, options?: RenderOptions<Q, Container>): RenderResult<Q, Container> => {
  return render(<ThemeProvider theme={theme}>
    <Provider store={store}>
    {ui} 
    </Provider>
  </ThemeProvider>, options || {});
}

export const fixtures = {
  getItem() {
    return {
      tags: [
      "Wood"
      ],
      price: 18.99,
      name: "Small Wood Shirt",
      description: "voluptatem blanditiis est aut deserunt error esse provident aut qui omnis aliquam est eveniet",
      slug: "Small-Wood-Shirt",
      added: 1479304088889,
      manufacturer: "Konopelski-Inc",
      itemType: "shirt"
      }
  }
}
