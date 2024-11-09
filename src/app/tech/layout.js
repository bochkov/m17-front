import PropTypes from 'prop-types';
import AppLayout from '@/components/layouts/AppLayout';

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default function Layout({children}) {
    return <AppLayout>{children}</AppLayout>
}