import { QrCodeGeneratorPage } from './app.po';

describe('qr-code-generator App', () => {
  let page: QrCodeGeneratorPage;

  beforeEach(() => {
    page = new QrCodeGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
