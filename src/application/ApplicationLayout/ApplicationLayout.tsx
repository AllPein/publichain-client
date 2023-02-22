import PropTypes from 'prop-types';

const ApplicationLayout = ({ children }) => (
  <>
    <ApplicationHeader />
    {children}
  </>
);

export { ApplicationLayout };

ApplicationLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
