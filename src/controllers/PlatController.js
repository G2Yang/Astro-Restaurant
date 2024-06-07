import BaseController from "./BaseController";


class PlatController extends BaseController {

    constructor() {
        super('m50r0b8ucxc2yqc', 'plats');
    }

    async getCarta() {
        let carta = await this.getAll();
        //carta = carta.list;
        // extraient la foto, només agafem la primera
        carta = carta.map(e => {
            let foto = (e.Imagen && e.Imagen[0].signedUrl) ? e.Imagen[0].signedUrl : '';
            delete e.Imagen;
            e.Imagen = foto;
            return e;
        });
        return carta;
    }

    async getMenu() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene menu=true
        return menu.filter(e => e.Menu);
    }

    async getMenuSemanal() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene menu=true
        return menu.filter(e => e.Semanal);
    }

}


export default PlatController;