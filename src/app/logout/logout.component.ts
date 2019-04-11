import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginemitterService} from '../utility/loginemitter.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router,
              private emmiter: LoginemitterService) { }

  ngOnInit() {
    sessionStorage.removeItem('customer');
    this.emmiter.broadcastLogoutEvent(true);
    this.router.navigate(['/']);
  }

}
