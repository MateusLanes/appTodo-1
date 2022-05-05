import { Component } from '@angular/core';
import { AlertController,  ToastController} from '@ionic/angular';
import { toastController } from '@ionic/core';

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
        

      });
      
      const tarefa = { nome: novaTarefa, realizada: false};
      this.tarefas.push(tarefa);

      toast.present();
      
    }
    return;
  }
}
  function showAdd() {
    throw new Error('Function not implemented.');
  }

