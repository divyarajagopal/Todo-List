import todos from './todos'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Task1',
        id: 0
      })
    ).toEqual([
      {
        text: 'Task1',
        completed: false,
        id: 0
      }
    ])

    expect(
      todos([
        {
          text: 'Task1',
          completed: false,
          id: 0
        }
      ], {
        type: 'ADD_TODO',
        text: 'Task2',
        id: 1
      })
    ).toEqual([
      {
        text: 'Task1',
        completed: false,
        id: 0
      }, {
        text: 'Task2',
        completed: false,
        id: 1
      }
    ])

    
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          text: 'Add 1 to the task1',
          completed: false,
          id: 1
        }, {
          text: 'Add 1 to the task2',
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        text: 'Add 1 to the task1',
        completed: true,
        id: 1
      }, {
        text: 'Add 1 to the task2',
        completed: false,
        id: 0
      }
    ])
  })

})