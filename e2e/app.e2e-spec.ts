import { CarDealershipPage } from './app.po';

describe('car-dealership App', () => {
  let page: CarDealershipPage;

  beforeEach(() => {
    page = new CarDealershipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
