export const Config = {
    api: {
        baseUrl:"http://localhost:8080",
        valoraciones:{
            create: '/valoraciones/create',
            search: '/valoraciones/valoraciones',
            delete: '/valoraciones/{id}',
            getById: '/valoraciones/{id}'
        },
        series:{
            create: '/series/create',
            search: '/series/series',
            delete: '/series/{id}',
            getById: '/series/{id}'
        },
        usuarios:{
            create: '/usuarios/create',
            search: '/usuarios/usuarios',
            delete: '/usuarios/{id}',
            getById: '/usuarios/{id}',
            getUsuariosByNombreAndApellido: '/usuarios/isLogged'
        },
        mastertable:{
            getPlataforma:'/mastertable/plataforma'
        }
    }
}