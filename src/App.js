import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux'
import { addFeature, removeFeature } from './actions/featureActions'

const App = () => {


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('mapState', state)
	return {
		additionalFeatures: state.additionalFeatures,
		additionalPrice: state.additionalPrice,
		car: state.car,
	};
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
