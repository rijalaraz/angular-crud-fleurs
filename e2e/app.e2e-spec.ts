import { FlowersPage } from './app.po';

describe('flowers App', () => {
  let page: FlowersPage;

  beforeEach(() => {
    page = new FlowersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
