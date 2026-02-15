import PropTypes from 'prop-types';
import ThemeProvider from './ThemeProvider';

PromoLayout.propTypes = {
    children: PropTypes.object.isRequired
}

export default function PromoLayout({ children }) {
    return (
        <ThemeProvider>{children}</ThemeProvider>
    )
}