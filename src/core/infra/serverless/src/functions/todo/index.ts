import { handlerPath } from '@libs/handler-resolver';

const path = 'todos';

export default {
    create: {
        handler: `${handlerPath(__dirname)}/handler.create`,
        events: [
            {
                http: {
                    method: 'post',
                    path: `${path}`
                }
            }
        ]
    },
    getAll: {
        handler: `${handlerPath(__dirname)}/handler.getAll`,
        events: [
            {
                http: {
                    method: 'get',
                    path: `${path}`
                }
            }
        ]
    },
    getById: {
        handler: `${handlerPath(__dirname)}/handler.getById`,
        events: [
            {
                http: {
                    method: 'get',
                    path: `${path}/{id}`
                }
            }
        ]
    },
    deleteById: {
        handler: `${handlerPath(__dirname)}/handler.deleteById`,
        events: [
            {
                http: {
                    method: 'delete',
                    path: `${path}/{id}`
                }
            }
        ]
    },
    toggleReminder: {
        handler: `${handlerPath(__dirname)}/handler.toggleReminder`,
        events: [
            {
                http: {
                    method: 'patch',
                    path: `${path}/{id}/reminder/{reminder}`
                }
            }
        ]
    },
}