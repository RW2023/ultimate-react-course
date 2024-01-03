

// Function to convert text to title case
const toTitleCase = (text) =>
  text.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
  );

import PropTypes from 'prop-types';

const Heading = ({ title, iconClass }) => {
  const titleCaseText = toTitleCase(title);

  return (
    <h1 className="text-center font-poppins text-3xl m-2 font-bold flex justify-center items-center">
      {iconClass && <i className={`${iconClass} mr-2`}></i>}
      {titleCaseText}
    </h1>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default Heading;