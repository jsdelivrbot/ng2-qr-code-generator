import { UrlSanatizerPipe } from './url-sanatizer.pipe';

describe('UrlSanatizerPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlSanatizerPipe();
    expect(pipe).toBeTruthy();
  });
});
