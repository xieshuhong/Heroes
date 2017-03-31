@Component({
	
	selector:'click-me',
	template:'
	
	  <button (click)="onClickMe"></button>
	  {{clickMessage}}
	'
	
	
})


export class clickMeComponent{
	clickMessage = '';
	
	onClickMe(){
		this.clickMessage = "You are my hero!";
	}
	
	
}


 
