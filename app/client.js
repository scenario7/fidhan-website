import {createClient} from '@sanity/client'

const client = createClient({
    projectId: 'zags4cmh', 
    dataset: 'production', 
    useCdn: true,
    apiVersion : '2024-10-10'
})

export default client