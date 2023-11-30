import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenavModule} from '@angular/material/sidenav';
import { distinctUntilChanged, map } from 'rxjs';
import { MySerService } from '../../Service/my-ser.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
  location:string="";
  loadAfterGetLocation = false;

  constructor(public myServe:MySerService, private router: Router,private route:ActivatedRoute) {}
  
//מיד בתחילת הריצה שמירת המיקום המתקבל ב-URL
  ngOnInit() {
    alert(`you need to insert your location in this format -/homePage?path= + your location `);
      this.route.queryParams.pipe(
        map(params => params["path"]),
        distinctUntilChanged(),
      ).subscribe(changedParam => {
        this.location = changedParam;
        this.loadAfterGetLocation = true;
      })
  }

  
}
