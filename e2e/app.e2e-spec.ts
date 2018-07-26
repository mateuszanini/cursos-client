import { CursosClientPage } from './app.po';

describe('cursos-client App', () => {
  let page: CursosClientPage;

  beforeEach(() => {
    page = new CursosClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
