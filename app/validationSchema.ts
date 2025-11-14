
import {z} from 'zod'

export const CreateIssueSchema = z.object({
    title : z.string().min(3,("* Title must have at leaset 3 charactors *")).max(255),
    description:z.string().min(3,("* Description must have at leaset 3 charactors *")).max(65535)
})

export const PatchIssueSchema = z.object({
    title : z.string().min(3,("* Title must have at leaset 3 charactors *")).max(255).optional(),
    description:z.string().min(3,("* Description must have at leaset 3 charactors *")).max(65535).optional(),
    assignedToUserId:z.string().min(1,"*Id is required*").max(255).optional().nullable(),
})

