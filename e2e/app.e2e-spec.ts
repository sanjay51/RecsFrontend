import { RecsFrontendPage } from './app.po';

describe('recs-frontend App', function() {
  let page: RecsFrontendPage;

  beforeEach(() => {
    page = new RecsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
