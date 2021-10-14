import { Colors, Layout } from '../index';
describe('toJSON tests', () => {
    it('should render correctly', () => {
        expect(Colors);
    });

    it('matches last snapshot', async () => {
        expect(Colors).toMatchSnapshot();
    });

    it('should render correctly', () => {
        expect(Layout);
    });

    it('matches last snapshot', async () => {
        expect(Layout).toMatchSnapshot();
    });
});
