
import {z} from 'zod'

const IssueSchema = z.object({
    title : z.string().min(3,("* Title must have at leaset 3 charactors *")).max(255),
    description:z.string().min(3,("* Description must have at leaset 3 charactors *"))
})

export default IssueSchema;