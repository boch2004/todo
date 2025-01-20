import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todolist: [
            {
                id: Math.random(),
                title: "todo item 1",
                description: "description todo item 1",
                isDone: false,
            },
            {
                id: Math.random(),
                title: "todo item 2",
                description: "description todo item 2",
                isDone: false,
            },
            {
                id: Math.random(),
                title: "todo item 3",
                description: "description todo item 3",
                isDone: true,
            },
        ]
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        addTask: (state, action) => {
            state.todolist.push(action.payload);
        },
        removeTask: (state, action) => {
            state.todolist = state.todolist.filter((el) => el.id !== action.payload.id)
        },
        doneTask: (state, action) => {
            let i = state.todolist.findIndex((el) => el.id === action.payload.id);

            state.todolist[i] = {
                ...state.todolist[i],
                isDone: !state.todolist[i].isDone
            }
        },
        EditTask: (state, action) => {
            let i = state.todolist.findIndex((el) => el.id === action.payload.id);

            state.todolist[i] = {
                ...state.todolist[i],
                title:action.payload.edited.title,
                description: action.payload.edited.description,
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { removeTask,doneTask,EditTask, decrement, addTask } = todoSlice.actions;

export default todoSlice.reducer;
