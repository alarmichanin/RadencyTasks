import * as yup from 'yup';
import { string } from 'yup';


export const createNoteSchema = yup.object({
    id: yup.string().uuid(),
    Name: yup.string().required(),
    Date: yup.date().default(() => new Date()).required(),
    Category: string().required().oneOf(["Idea", "Task", "Random Thought"]),
    Content: yup.string().required(),
    Active: yup.boolean().required()
})

export const updateNoteSchema = yup.object({
    id: yup.string().uuid(),
    Name: yup.string(),
    Date: yup.date().default(() => new Date()),
    Category: string().oneOf(["Idea", "Task", "Random Thought"]),
    Content: yup.string(),
    Active: yup.boolean().required()
})
