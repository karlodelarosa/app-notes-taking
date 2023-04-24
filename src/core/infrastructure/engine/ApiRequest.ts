export default class ApiRequest {
    protected url: string
    protected module:string
    // protected verb: string

    constructor(url: string, module: string) {
        this.url = url;
        this.module = module;
    }

    protected getFullUrl(): string {
        return `${this.url}/${this.module}/`
    }

}