import BaseController from "./BaseController";


class ReservaController extends BaseController {

    constructor() {
        super('m1fz5b9bnb3zp5a', 'comentarios');
    }


    async getCarta() {
        let carta = await this.getAll();
        return carta;
    }

    async getLogin(username, password) {
        const url = new URL('https://app.nocodb.com/api/v2/tables/m797s95h3ko0scy/records');
        const params = {
            where: `(Nombre,eq,${username})~and(Credencial,eq,${password})`
        };

        // Agregar los parámetros a la URL
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        // Retornar directamente la propiedad list que contiene los registros
        const data = await response.json();
        return data.list;

    }

    async getComentarios() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene menu=true
        return menu.filter(e => e.Comentario);
    }

    async createItem(Nombre, Comentario) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Nombre: Nombre,
                Comentario: Comentario
            })
        });

        const data = await response.json();
        return data;
    }

}


export default ReservaController;