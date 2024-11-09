import PropTypes from 'prop-types';
import PromoLayout from '@/components/layouts/PromoLayout';

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default function Layout({ children }) {
    return <PromoLayout>{children}</PromoLayout>
}