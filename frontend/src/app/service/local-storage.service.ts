import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService{
    db:Storage;

    constructor(){
        this.db = window.localStorage;
    }

    get(key:string){
        const item = this.db.getItem(key)
        return item;
    }

    set(key:string, value:any){
        this.db.setItem(key, value)
    }

    remove(key:string):void{
        this.db.removeItem(key)
    }

}
