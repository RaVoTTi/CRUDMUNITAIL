export interface IResponse<G> {
    ok: boolean,
    msg: string[],
    result: G[],
    token?:string 
}

export interface IPopulate {
    _id: string,
    name: string
}