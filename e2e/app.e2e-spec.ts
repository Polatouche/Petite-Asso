import { PetiteAssoPage } from './app.po';

describe('petite-asso App', () => {
  let page: PetiteAssoPage;

  beforeEach(() => {
    page = new PetiteAssoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
