//src/Components/Heading.jsx
import PropTypes from 'prop-types'; // Import PropTypes for validation



// Function to convert text to title case
const toTitleCase = (text)  =>
  text.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
  );

const Heading  = ({ title, iconClass }) => {
  const titleCaseText = toTitleCase(title);

  return (
    <h1
      className="text-center font-poppins text-4xl m-2 font-bold flex justify-center items-center drop-shadow-xl"
      style={{
        textShadow:
          '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
      }}
    >
      {iconClass && <i className={`${iconClass} mr-2`}></i>}
      {titleCaseText}
    </h1>
  );
};

// Define PropTypes validation for the props
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
};

export default Heading;
