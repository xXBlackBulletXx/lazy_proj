import { h, Component } from 'preact';
import style from './style';
import Axios from 'axios';
import ListEvents from './listEvents';
import LinearProgress from 'preact-material-components/LinearProgress';
import 'preact-material-components/LinearProgress/style.css';

export default class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: [],
      isLoading: false
    }
  }

  componentDidMount(){
    const dataParams = {
      "request": "events_list"
    }
    this.setState({isLoading: true})
    const {PREACT_APP_BASE_URL} = process.env
    Axios.get(`${PREACT_APP_BASE_URL}databaseDispatch.php`, {
      params: dataParams
    })
    .then( ({data}) => this.setState({values: data, isLoading: false}))
    .catch( err => console.log(err));
  }

  render({}, {}){
    const {values, isLoading} = this.state
    return(
      <div class={`${style.profile} page`}>
        {
          isLoading ? <LinearProgress reversed indeterminate /> : null
        }
        {
          values.length > 0 ?
            <ListEvents data={values}/>
          : null
        }
      </div>
    )
  }
}