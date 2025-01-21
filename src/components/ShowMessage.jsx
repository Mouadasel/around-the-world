import PropTypes from "prop-types";

const ShowMessage = ({ message }) => {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold">{message}</p>
    </div>
  );
};

ShowMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ShowMessage;
