import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: Observable<any[]>;
  title = 'Messy Phrase';
  subtitle = 'Add new Phrase'
  item: any = { id: '', description: null, phrase: null };


  constructor(db: AngularFirestore,
    private _store: AngularFirestore,
    //private router: Router,
    //private route: ActivatedRoute
    ) {
    this.items = db.collection('/items').valueChanges();
  }

  ngOnInit() {
    //this.route.params.subscribe(data => {
      if (!isUndefined(this.item.id)) {
        this.title = "Update Messy Phrase";
        this.subtitle = "Update existing phrase";
        
        console.log("entro a editar, entonces el asado.id es:" + this.item.id);
        this._store.collection('asados', ref => ref.where('id', '==', this.item.id))
          .valueChanges()
          .subscribe(items => {
            this.item = items[0];
          });
      }
    //});
  }
  confirm = (form: NgForm) => {
    console.log("Adding item:");
    console.log("Aca va a poner el json del item:" + this.item);

    if (!this.item.id) {
      console.log("entra por aca entonces item.id es undefined:" + this.item.id)
      this.item.id = this._store.createId();
    }

    this._store.collection('items').doc(this.item.id).set(this.item)
      .then(() => form.reset())
      .catch(err => console.error(err));
    //this.router.navigateByUrl('/dashboard');
  }
}
