import { MyResumePage } from './app.po';

describe('my-resume App', () => {
  let page: MyResumePage;

  beforeEach(() => {
    page = new MyResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cv works!');
  });
});
