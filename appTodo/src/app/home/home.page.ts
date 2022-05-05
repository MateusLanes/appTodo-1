import { Component } from '@angular/core';
import { AlertController,  ToastController} from '@ionic/angular';
import { actionSheetController, toastController } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tarefas: any[] = [];
  constructor(private alertCtrl: AlertController,  private toastCtrl: ToastController) {}
    
  async showAdd() {
      
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'O que você deseja fazer?',
        inputs: [
          {
            name: 'tarefa1',
            type: 'text',
            placeholder: 'Digite o que deseja fazer.',
      },
      ],
      buttons: [
      {
      text: 'Cancelar',
      role: 'Cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Cancelado com sucesso!');
      },
      },
      {
        text: 'Adicionar',
        handler: (form) => {
        this.adicionarTarefa(form.tarefa1);
        console.log('Adicionado com sucesso');

        
      let tarefaSalva = localStorage.getItem ('tarefaUsuario');

      if(tarefaSalva!=null){
          this.tarefas = JSON.parse(tarefaSalva);
      }
      

    },
    },
    ],
    });

    
    await alert.present();

  }

  async adicionarTarefa(novaTarefa: string){
    if (novaTarefa.trim().length <1 ){
      const toast = await this.toastCtrl.create({
        message: 'Por favor, digite a tarefa!',

        duration: 2000,

        position: 'top',
        

      }
      );
      
     
      toast.present();
      return;
    }
    const tarefa = { nome: novaTarefa, realizada: false};
    this.tarefas.push(tarefa);
    this.salvaLocalStorange();
  }
    salvaLocalStorange(){
        localStorage.setItem('tarefaUsuario', JSON.stringify(this.tarefas));
    }
}
  function showAdd() {
    throw new Error('Function not implemented.');
  } 

/*
  async realizaAcoes(tarefa: any){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Qual ação realizar ?',
      buttons: [{
        text: tarefa.realizada ? 'Desmarcar' : 'Marcar',
        icon: tarefa.realizada ? 'checkmark-circle' : 'radio-button-off-outline',
        handler: () => {
          tarefa.realizada = !tarefa.realizada;
          this.salvaLocalStorange();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
            console.log('Cancel clicked');
        }
      }
      ]}
    );
      awaint actionSheetController.present();
      
      const { role, data } = awaint actionSheet.ondDidDismiss();
  }
   */