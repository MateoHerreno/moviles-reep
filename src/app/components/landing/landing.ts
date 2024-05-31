import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core'
import { Page } from "@nativescript/core";
import { ApiService } from '~/app/service/api.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";
import { Dialogs } from '@nativescript/core'

@Component({
  selector: 'landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent implements OnInit {
  productos: any[];
  public constructor(private router: Router, private page: Page, private apiService: ApiService) {
    // Use the component constructor to inject providers.
    this.obtenerTodos();
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
  public onTap() {
    this.router.navigate(["landing"]);
  }
  public perfil() {
    this.router.navigate(["verperfil"])
  }
  public productos_ir() {
    this.router.navigate(["productos"])
  }
  public obtenerTodos() {
    this.apiService.getRegisters().subscribe((data: any[]) => {
      console.log(data);
      this.productos = data;}
    );
  }
}