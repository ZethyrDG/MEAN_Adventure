import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-my-bedroom',
  templateUrl: './my-bedroom.component.html',
  styleUrls: ['./my-bedroom.component.css']
})
export class MyBedroomComponent implements OnInit {
  description: String;
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if(this._httpService.user.progress.myBedroom == false){
      this.description = "You start unpacking.  You drop your bowling trophy which knocks a floor board loose and you find a mysterious note.  It reads, 'Something in the basement is not normal! To find the key to the basement door you must say the password to the noble knight in the Parlor. the password is...' The rest of the note is illegible"
      this._httpService.user.progress.myBedroom = true
      
    }
    else{
      this.description = "It's your bedroom. It's kind of a mess. Maybe when you're done adventuring, you should clean up."
    }
    
  }
  

}
