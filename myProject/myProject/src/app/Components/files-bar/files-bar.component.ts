import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { MySerService } from '../../Service/my-ser.service';

//הגדרת הרשימה
interface listFileObj {
  name: string;
  type?: string;
  children?: listFileObj[];
}
//  אתחול הרשימה
const TREE_DATA: listFileObj[] = [

];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-files-bar',
  templateUrl: './files-bar.component.html',
  styleUrls: ['./files-bar.component.css'],

})
export class FilesBarComponent {

  public allListFile: string[] = [];
//הגדרות עץ 
  private _transformer = (node: listFileObj, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  //משתנה לקבלת הניתוב
  @Input() location: string = "";
  constructor(public myServe: MySerService, private route: ActivatedRoute) {
     this.dataSource.data = TREE_DATA;
  }
  node:any;
  //שמירת הנתונים הנמשכים מהשרת בעץ ושמירת המיקום הנוכחי בסרוויס
  ngOnInit() {
    this.allListFile = [];
    this.myServe.SendLocationServe(this.location).subscribe(
      data => {
        this.myServe.node=<any>(data).children;
        this.dataSource.data = <any>(data).children;
      },
      err => {
        alert(err.message);
      }
    );


  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
