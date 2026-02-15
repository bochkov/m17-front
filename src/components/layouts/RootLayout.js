import PropTypes from 'prop-types';

import ThemeProvider from './ThemeProvider';

RootLayout.propTypes = {
    children: PropTypes.object.isRequired
}

export default function RootLayout({ children }) {
    return (
        <ThemeProvider>{children}</ThemeProvider>
    )
}