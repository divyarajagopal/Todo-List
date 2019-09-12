const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      let index = state.findIndex(el => el.text === action.text);

      if (index === -1) {
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      }
      return state;
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
