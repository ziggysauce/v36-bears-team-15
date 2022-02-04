import { render } from '../../lib/test-utils';

// import Layout from '.';

// const meta = {
//   title: 'Test File',
// };

// TODO: find a way to mock NextJs Router behavior, else testing Layout component won't work
describe('<Layout />', () => {
  it('should be truthy', () => {
    const { baseElement } = render(<div>Hello</div>);

    expect(baseElement).toBeTruthy();
  });
});
