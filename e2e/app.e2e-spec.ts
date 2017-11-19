import { PortafolioPage } from './app.po';

describe('portafolio App', function() {
  let page: PortafolioPage;

  beforeEach(() => {
    page = new PortafolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
