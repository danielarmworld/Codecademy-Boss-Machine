module.exports = {
    components: {
      schemas: {
        // id model
        id: {
          type: "string", // data type
          description: "An id that required to find any spesific minion, idea or meeting", // desc
          example: "1", // example of an id
        },
        // todo model
        Minion: {
          type: "object", // data type
          properties: {
            id: {
              type: "string", // data-type
              description: "Minion identification number", // desc
              example: "1", // example of an id
            },
            name: {
              type: "string", // data-type
              description: "Minion's name", // desc
              example: "Gregorio Mosciski", // example of a title
            },
            title: {
              type: "string", // data type
              description: "Minion's Job Title", // desc
              example: "Human Accountability Facilitator", // example of a completed value
            },
            weakness : {
                type : 'string',
                description : 'Minion weakness',
                example : 'Will not build value-added secured line, Unable to execute B2C application, Unable to execute visionary time-frame, too multi-byte'
            },
            salary : {
                type : 'number',
                description : 'Minion salary',
                example : 40000
            }
          },
        },
        // Todo input model
        TodoInput: {
          type: "object", // data type
          properties: {
            title: {
              type: "string", // data type
              description: "Todo's title", // desc
              example: "Coding in JavaScript", // example of a title
            },
            completed: {
              type: "boolean", // data type
              description: "The status of the todo", // desc
              example: false, // example of a completed value
            },
          },
        },
        // error model
        Error: {
          type: "object", //data type
          properties: {
            message: {
              type: "string", // data type
              description: "Error message", // desc
              example: "Not found", // example of an error message
            },
            internal_code: {
              type: "string", // data type
              description: "Error internal code", // desc
              example: "Invalid parameters", // example of an error internal code
            },
          },
        },
      },
    },
  };