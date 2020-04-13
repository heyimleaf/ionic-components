import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastControler: ToastController) { }

  async presentToast(){
    const toast = await this.toastControler.create({
      message: 'Suas configurações foram salvas com sucesso!',
      duration: 3000,
      color: 'primary'
    });
    toast.present();
  }

  
  async presentToastWithOptions() {
    const toast = await this.toastControler.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'bottom',
      color: 'warning',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorito');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  ngOnInit() {
  }

}
