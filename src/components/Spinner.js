import react from 'react';

const Spinner = (props) => {
  return <div className="ui active inline text loader">{props.loadMsg}</div>;
};

Spinner.defaultProps = {
  loadMsg: 'Loading...',
};

export default Spinner;
