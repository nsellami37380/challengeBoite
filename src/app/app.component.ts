import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title of composant appRoot';

  isThisIngredientVital: boolean = true;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
}
