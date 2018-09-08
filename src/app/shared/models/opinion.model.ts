import { Journalist } from './journalist.model'

export class Opinion {
    constructor(public id: number, public title: string, 
                public brief_information: string, public full_information: string,
                public image_path: string, public owner: Journalist, public headline: string
                ) {}
}