import BaseController from "./BaseController";


class ReservaController extends BaseController {

    constructor() {
        super('mijenu01pemrq1o', 'reserves');
    }


    async createItem(Nombre, Telefono, Email, Data,Time) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Nombre: Nombre,
                Telefono: Telefono,
                Email: Email,
                Data: Data,
                Hora: Time
            })
        });

        const data = await response.json();
        return data;
    }

}


export default ReservaController;