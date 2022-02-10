import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
// import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faTimes = faTimesCircle;

  constructor() { }

  ngOnInit(): void {
    // this.gifservice.getSomeGifs();
  }

}
