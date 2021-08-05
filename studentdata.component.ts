import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    

}
backfn(){
  this.router.navigateByUrl("login")
}
findperc(){
  this.router.navigateByUrl("percentage")
}

}