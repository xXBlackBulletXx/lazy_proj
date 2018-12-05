import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './event.css';
import Icon from 'preact-material-components/Icon';

export default class EventComponent extends Component{
  componentDidMount(){
    console.log("MOUNT")
  }
  render(){
    const {data} = this.props
    const {event_name, description} = data
    return(
      <div class={style.cardContainer}>
        <Card class={style.myCard}>
          <div class="card-header">
            <h2 class=" mdc-typography--title">{event_name}</h2>
            <h3 class=" mdc-typography--caption">{description}</h3>
          </div>
          <Card.Actions>
            <Card.ActionButtons>
              <Card.ActionButton>Edit</Card.ActionButton>
            </Card.ActionButtons>
            <Card.ActionIcons>
              <Card.ActionIcon>delete</Card.ActionIcon>
            </Card.ActionIcons>
          </Card.Actions>
          {/* <div class="card-header">
            <h2 class=" mdc-typography--title">Title</h2>
            <div class=" mdc-typography--caption">Caption</div>
          </div>
          <Card.Media className="card-media" />
          <Card.Actions>
            <Card.ActionButtons>
              <Card.ActionButton>OK</Card.ActionButton>
            </Card.ActionButtons>
            <Card.ActionIcons>
              <Card.ActionIcon>share</Card.ActionIcon>
            </Card.ActionIcons>
          </Card.Actions> */}
        </Card>
      </div>
    )
  }
}