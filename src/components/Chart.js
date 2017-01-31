import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';



const Chart = (props) => {
  console.log('props ', props);

  function average(data) {
    return _.round(_.sum(data)/data.length);
  }

  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.unit}</div>
    </div>
  )
};

export default Chart;