
import {z} from 'zod'

const issueSchema = z.object({
    title : z.string().min(3,("Title is Required")).max(255),
    description:z.string().min(3,("Description is Required"))
})

export default issueSchema;
