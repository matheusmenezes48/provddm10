import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-passagem',
  templateUrl: './modal-passagem.page.html',
  styleUrls: ['./modal-passagem.page.scss'],
})
export class ModalPassagemPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  nova_passagem = {
    "id": "",
    "createdAt": "",
    "origem": "",
    "destino":"",
    "poltrona":0,
    "Valor":0,
    "data":0
  }

  
  add() {
    this.modalController.dismiss(this.nova_passagem)
  }

}
