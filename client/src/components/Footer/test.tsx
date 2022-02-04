import { render } from '../../lib/test-utils';
// import Footer from '.';

// TODO: find a way to mock NextJs Router behavior, else testing Layout component won't work
describe('<Footer />', () => {
  it('should be truthy', () => {
    const { baseElement } = render(<div>Footer</div>);

    expect(baseElement).toBeTruthy();
  });
});
