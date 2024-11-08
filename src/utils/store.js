import { create } from "zustand";
import { v4 as uuidv4 } from "uuid"; // Import the uuid v4 function

const useTodoStore = create((set) => ({
  todos: [],
  cart: [],

  addTodo: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todo,
          id: uuidv4(),
          completed: false,
        },
      ],
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  addToCart: (item) =>
    set((state) => ({
      cart: [
        ...state.cart,
        {
          ...item,
          id: item.id || uuidv4(),
        },
      ],
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  editCartItem: (id, updatedProperties) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, ...updatedProperties } : item
      ),
    })),
}));

export default useTodoStore;
