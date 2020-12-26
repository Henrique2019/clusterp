import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SubGrupoModel } from 'src/app/models/sub-grupo-model';

@Injectable({
  providedIn: 'root'
})
export class ClustService {

  url = 'http://localhost:8080/artigo/'; // api

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Obtem todos os itens/produtos
  getClusts(): Observable<SubGrupoModel[]> {
    return this.httpClient.get<SubGrupoModel[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError));
      }

  // Obtem um item/produto pelo id
  getCarById(id: number): Observable<SubGrupoModel> {
    return this.httpClient.get<SubGrupoModel>(this.url + '/artigo' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // salva um item/produto
  saveClusts(Clusts: SubGrupoModel): Observable<SubGrupoModel> {
    return this.httpClient.post<SubGrupoModel>(this.url, JSON.stringify(Clusts), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // utualiza um item/produto
  updateClusts(Clusts: SubGrupoModel): Observable<SubGrupoModel> {
    return this.httpClient.put<SubGrupoModel>(this.url + '/artigo/' + Clusts._id, JSON.stringify(Clusts), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // deleta um item/produto
  deleteClusts(Clusts: SubGrupoModel) {
    return this.httpClient.delete<SubGrupoModel>(this.url + '/artigo/' + Clusts._id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
