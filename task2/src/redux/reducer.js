import { ADD_TODO, DELETE_TODO, UPDATE_TODO, DELETE_ALL, ARCHIEVE_TODO, SHOW_ARCHIEVED } from './actions';
import { todos } from './states';
let archived = []


export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload)
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload)
            return newTodos;
        case DELETE_ALL:
            newTodos = []
            return newTodos
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }
            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
            break;
        case ARCHIEVE_TODO:
            newTodos = [...state];
            newTodos.map(todo => {
                if (!todo.isActive)
                    archived.push(todo)
            })
            newTodos = newTodos.filter(todo => todo.isActive)
            return newTodos;
        case SHOW_ARCHIEVED:
            return archived;
        default:
            break;
    }
    return state;
}