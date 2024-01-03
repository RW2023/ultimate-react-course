// Remove the unused import statement for React

const toTitleCase = (text) =>
  text.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
  );

import PropTypes from 'prop-types';

const SubHeading = ({ title, iconClass }) => {
  const titleCaseText = toTitleCase(title);

  return (
    <h2 className="text-xl font-semibold font-poppins text-center mb-6 mt-6">
      {iconClass && <i className={`${iconClass} mr-2`}></i>}
      {titleCaseText}
    </h2>
  );
};

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default SubHeading;