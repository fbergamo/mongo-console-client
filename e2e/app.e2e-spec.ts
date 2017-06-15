import { MongoConsoleWebPage } from './app.po';

describe('mongo-console-web App', () => {
  let page: MongoConsoleWebPage;

  beforeEach(() => {
    page = new MongoConsoleWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
