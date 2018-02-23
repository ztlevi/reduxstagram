// a reducer tatkes in two thing:

// 1. this action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing Likes!!');
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we are updateing
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), // after the one we are updateing
      ];

    default:
      return state;
  }
}

export default posts;
