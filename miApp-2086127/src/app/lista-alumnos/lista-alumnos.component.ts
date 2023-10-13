import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})

export class ListaAlumnosComponent implements OnInit {  
  
  constructor(private actionSheetCtrl: ActionSheetController) { }
  
  ngOnInit(): void {  
  }  
  nombre: string = "Hola";
  
  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];

  
  async presentActionSheet(alumno: string, event: Event) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿Está seguro de que desea eliminar este alumno?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
      
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

}
