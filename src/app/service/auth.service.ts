import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoaldabell.herokuapp.com/usuarios/logar', userLogin)

  }
  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogpessoaldabell.herokuapp.com/usuarios/cadastrar', user)

    }

    getByIdUser(id: number): Observable<User>{
      return this.http.get<User>(`https://blogpessoaldabell.herokuapp.com/usuarios/${id}`)
    }


    logado(){
      let ok: boolean = false

      if(environment.token != ''){
        ok = true
      }
      return ok
    }
    adm(){
      let ok: boolean = false

      if(environment.tipo == 'adm'){
        ok = true
      }
      return ok
    }
}

