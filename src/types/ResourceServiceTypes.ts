

export interface ResourceCrudTypes<P,I,R> {
    list : () => Promise<R>;
    create : (payload : P) => Promise<R>;
    delete : (id : I) => Promise<void>;
    update : (id : I) => Promise<R>;
}