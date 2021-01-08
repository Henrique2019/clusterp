import { Component, ViewChild, ElementRef  } from '@angular/core';
import { SubGrupoModel } from 'src/app/models/sub-grupo-model';
import { ClustService } from 'src/app/service/clust.service';

import * as jsPDF from 'jspdf'
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-pdf',
  templateUrl:'./pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})

export class PdfComponent  {

  Clust = {} as SubGrupoModel;
  Clusts: SubGrupoModel[];

  trackById(index: number, Clust: ClustService): number { return Clust._id; }
  constructor(private ClustService: ClustService) {}


  ngOnInit() {
    this.getClusts();
  }

  // defini se um Item será criado ou atualizado
  saveClusts(form: NgForm) {
    if (this.Clust._id !== undefined) {
      this.ClustService.updateClusts(this.Clust).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.ClustService.saveClusts(this.Clust).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os Item
  getClusts() {
    this.ClustService.getClusts().subscribe((Clusts: SubGrupoModel[]) => {
      this.Clusts = Clusts;
    });
  }

  // deleta um Item
  deleteClusts(Clust: SubGrupoModel) {
    this.ClustService.deleteClusts(Clust).subscribe(() => {
      this.getClusts();
    });
  }

  // copia o Item para ser editado.
  editClusts(Clust: SubGrupoModel) {
    this.Clust = { ...Clust };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getClusts();
    form.resetForm();
    this.Clust = {} as SubGrupoModel;
  }
  @ViewChild('content',{static: false}) content: ElementRef;

  downloadPDF() {
    const options = {
      background: 'white',
      height : 1000,
      width : 700,
      //height : 900,
      //width : 700,
    };


    let doc = new jsPDF();

    const div = document.getElementById('content');
    doc.setFontSize(40);
    doc.addHTML(div, 0, 3, options,() => {

       doc.save("Persona.pdf");
    });
 }
}
