import BaseController from "./BaseController";


class ReservaController extends BaseController {

    constructor() {
        super('m1fz5b9bnb3zp5a', 'comentarios');
    }


    async getCarta() {
        let carta = await this.getAll();
        return carta;
    }

    async getComentarios() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene menu=true
        return menu.filter(e => e.Comentario);
    }

}


export default ReservaController;