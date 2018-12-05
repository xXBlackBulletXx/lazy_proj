import {Component} from 'preact';
import * as _ from 'lodash';
import EventComponent from './event';

export default class ListEvents extends Component{
  componentDidMount(){
    console.log("MOUNT")
  }

  renderData(list){
    console.log(list)
    return _.map(list, (el) => <EventComponent data={el}/>);
  }

  render(){
    const {data} = this.props
    return(
      <div class="eventList">
        <h1>Lista Eventi</h1>
        {this.renderData(data)}
      </div>
    )
  }
}