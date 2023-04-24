import * as _ from 'lodash'
import Request from "@/core/infrastructure/Request"
import { hashPassword } from "@/js/composable/hashPassword"

export default class UserAuthentication extends Request {
    protected static module: string = 'user'
    protected name: string = ''
    protected password: string = ''

    constructor() {
        super(UserAuthentication.module)
    }

    setName(name: string): this {
        this.name = _.escape(name)
        return this
      }
    
    setPassword(password: string): this {
        this.password = hashPassword(_.escape(password))
        return this
    }

    async auth() {
        const params = {
            name: this.name,
            password: this.password
        }
        return await this.authenticate(params)
    }
}