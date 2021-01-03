import { Component, Inject, ViewChild, ElementRef  } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'



@Component({
  selector: 'app-pdf',
  templateUrl:'./pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})

export class PdfComponent  {




  @ViewChild('content', {static: false}) content: ElementRef;


  public downloadPDF() {
    const div = document.getElementById('content');

    html2canvas(div).then((canvas) => {



      var imgWidth = 290;
      var imgHeight = 206;
      var imgHeight = canvas.height * imgWidth / canvas.width;

      const imgData = canvas.toDataURL("image/PNG");

      let doc = new jsPDF('p', 'mm', 'a4');
      const position = 10;

    doc.addImage(imgData,'jpeg', 0, position, imgWidth, imgHeight, 0, 'NONE', 0,);

    doc.save('persona.pdf');
  });
 }
}
