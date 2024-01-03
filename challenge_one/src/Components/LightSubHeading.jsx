//src/Components/SubHeading.jsx
import PropTypes from 'prop-types';

const toTitleCase = (text) => {
  return text.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
  );
};

const SubHeading = ({ title, iconClass }) => {
  const titleCaseText = toTitleCase(title);

  return (
    <h2
      className="text-2xl font-semibold font-poppins text-center mb-6 mt-6 drop-shadow-xl"
      style={{
        textShadow:
          '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
      }}
    >
      {iconClass && <i className={`${iconClass} mr-2`} />}
      {titleCaseText}
    </h2>
  );
};

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string, // Add prop validation for iconClass
};

export default SubHeading;
