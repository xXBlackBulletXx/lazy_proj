import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import Axios from 'axios';
import * as _ from 'lodash';
import { Button } from 'preact-material-components/Button';

export default class Home extends Component {
	constructor(props){
		super(props);
	}

	onInput(e){
		const {name, value} = e.currentTarget;
		this.setState({[name]: value})
	}

	submit(e){
		e.preventDefault();
		const url = "http://mizutest.altervista.org/test.php";
		const formData = this.state;
		let bodyFormData = new FormData();
		_.map(this.state, (el, i) => bodyFormData.set(i, el));
		Axios({
			method: 'post',
			url: url,
			data:bodyFormData,
			headers: {'Content-Type': 'multipart/form-data' }
		}).then(({data}) => console.log(data)).catch(err => console.log(err));
	}

	render() {
		return (
			<div class={`${style.home} page`}>
				<h1>Inserisci evento</h1>
				<Card>
					<form id="inserisciEvento" onSubmit={this.submit.bind(this)}>
						<div className={style.cardBody}>
							<TextField className={style.inputText} label="Nome Evento" name="event_name" outlined required={true} onInput={this.onInput.bind(this)} helperTextValidationMsg={true} maxLength={300}/>
							<TextField className={style.inputText} textarea={true} label="Descrizione Evento" name="event_descrizione" outlined onInput={this.onInput.bind(this)} maxLength={1500}/>
							<TextField className={style.inputText} label="Città" name="event_citta" outlined required={true} onInput={this.onInput.bind(this)}  maxLength={40}/>
							<TextField className={style.inputText} label="Link Evento" name="event_link" outlined required={true} onInput={this.onInput.bind(this)}  maxLength={300}/>
							<TextField className={style.inputText} label="Link Contest" name="event_contest_link" outlined required={true} onInput={this.onInput.bind(this)}  maxLength={300}/>
							<TextField className={style.col6} type="date" label="Data Inizio" name="event_date_start" outlined required={true} onInput={this.onInput.bind(this)}/>
							<TextField className={style.col6} type="date" label="Data Fine" name="event_date_finish" outlined onInput={this.onInput.bind(this)}/>
						</div>
						<Card.Actions>
							<Button raised ripple>SUBMIT</Button>
						</Card.Actions>
					</form>
				</Card>
			</div>
		);
	}
}
