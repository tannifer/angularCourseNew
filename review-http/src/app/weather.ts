export class Weather {
    id: string = '';
    main: string='';
    description: string = '';

    constructor(id,main,description) {
        this.id = id;
        this.main = main;
        this.description = description;
    }

}
