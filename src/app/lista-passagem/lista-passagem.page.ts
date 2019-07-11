import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalPassagemPage } from '../modal-passagem/modal-passagem.page';
import { ModalController } from '@ionic/angular';





@Component({
  selector: 'app-lista-passagem',
  templateUrl: './lista-passagem.page.html',
  styleUrls: ['./lista-passagem.page.scss'],
})
export class ListaPassagemPage implements OnInit {
  passagens;

  listar() {
    return this.http.get("https://5d262f92eeb36400145c59c4.mockapi.io/passagem/")
  }
  adicionar(passagem) {
    return this.http.post("https://5d262f92eeb36400145c59c4.mockapi.io/passagem/", passagem)
  }

  constructor(public modalController: ModalController, private http: HttpClient) {
    this.listar().subscribe(
      (data) => {
        this.passagens = data
      },
    )
  }


  add(passagem) {
    this.adicionar(passagem).subscribe(
      (data) => {
        this.passagens.push(data)
      }
    )
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ModalPassagemPage
    });
    await modal.present();

    modal.onDidDismiss().then((passagem) => {
      this.add(passagem.data)      
    })
  }


  ngOnInit() {
  }





}
