import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAll().subscribe(data=>{
      console.log(data);
    })
  }

}
