import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useTodoStore = create((set) => ({
  todos: [],
  cart: [],

  // Todos Functions
  addTodo: (todoText) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todoText,
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

  // Cart Functions
  editCartItem: (id, updatedProperties = {}) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        // Update item if it exists in the cart
        return {
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, ...updatedProperties } : item
          ),
        };
      } else {
        // Add new item if it doesn't exist in the cart
        return {
          cart: [
            ...state.cart,
            {
              id,
              ...updatedProperties,
              quantity: updatedProperties.quantity || 1, // Default quantity to 1 if not provided
            },
          ],
        };
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));

export default useTodoStore;
