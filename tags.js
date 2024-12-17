export class Tags {
    constructor(_name, _id, _appendTo) {
        this.name = _name;
        this.id = _id;
        this.appendTo = _appendTo;
    }
    
    createTag() {
        const tag = document.createElement(this.name);
        tag.id = this.id;
        this.appendTo.appendChild(tag);
    }

}        

