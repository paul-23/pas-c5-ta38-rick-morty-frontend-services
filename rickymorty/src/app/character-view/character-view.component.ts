import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent {

  constructor(private _router: Router,private _route: ActivatedRoute, private servicioService: ServicioService, private titleService: Title) { }

  character:any;

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.servicioService.getCharacterByID(id).subscribe(
      (response) => {
        this.character = response;
        this.titleService.setTitle(this.character.name);
      },
      (error) => {
        console.log('Error al cargar datos');
      }
    );
  }

  charactersView(): void{
    this._router.navigate(['/characters']);
  }

}
