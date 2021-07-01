export interface Data {

    porcentajeToneladas: number
    metaToneladas: number
    sonrisas:  Sonrisas

}

export interface Sonrisas {

    principal: string
    lista:     Lista[]

}

export interface Lista {

    description: string
    link:        string
    
}
