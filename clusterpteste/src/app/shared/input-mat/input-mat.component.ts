import { Component, OnInit } from '@angular/core';
import { SubGrupoModel } from 'src/app/models/sub-grupo-model';
import { ClustService } from 'src/app/service/clust.service';
import { NgForm } from '@angular/forms';
/**
 * @title Input with hints
 */

@Component({
  selector: 'app-input-mat',
  templateUrl: './input-mat.component.html',
  styleUrls: ['./input-mat.component.css']
})
export class InputMatComponent implements OnInit {

  Clust = {} as SubGrupoModel;
  Clusts: SubGrupoModel[];

  constructor(private ClustService: ClustService) {}

  ngOnInit() {
    this.getClusts();
  }

  // defini se um Item será criado ou atualizado
  saveClusts(form: NgForm) {
    if (this.Clust.id !== undefined) {
      this.ClustService.updateClusts(this.Clust).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.ClustService.saveClusts(this.Clust).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }
  // Chama o serviço para obtém todos os Itens
  getClusts() {
    this.ClustService.getClusts().subscribe((Clusts: SubGrupoModel[]) => {
      this.Clusts = Clusts;
    });
  }
    // limpa o formulario
    cleanForm(form: NgForm) {
      this.getClusts();
      form.resetForm();
      this.Clust = {} as SubGrupoModel;
    }

}
