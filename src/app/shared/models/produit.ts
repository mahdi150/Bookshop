export class Produit {
id?: string;
 nom?: string;
 image?: string;
 prix?: string;
 description?: string;
 catId:string ;
 msg? : string ;
 constructor(args: Produit ) {
 this.id = args.id;
 this.nom = args.nom;
 this.image = args.image;
 this.prix = args.prix;
 this.description = args.description;
this.catId=args.catId ;
this.msg = args.msg ;
 }

}
export class categorie {
    id? : string ;
    nom? : string ;
    constructor(args: categorie){
        this.id=args.id ;
        this.nom=args.nom ;
    }
}

