export default {
    title: 'Comment',
    name: 'comment',
    type: 'document',
    fields:[
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            readOnly: true,
        },
        {
            name: 'comment',
            type: 'text',
            title: 'Comment',
            readOnly: true,
        },
        {
            name: 'post',
            type: 'reference',
            to:[
                {
                    type: 'post'   
                }
            ]
        }

    ]
}