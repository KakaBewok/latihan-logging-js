// const handler = require("./handler");

const routes = (handler) => {
  return [
    {
      method: "POST",
      path: "/notes",
      handler: handler.postNoteHandler,
    },
    {
      method: "GET",
      path: "/notes",
      handler: handler.getAllNotesHandler,
    },
    {
      method: "GET",
      path: "/notes/:id", // Use placeholder ":id" for dynamic ID
      handler: handler.getNoteByIdHandler,
    },
    {
      method: "PUT",
      path: "/notes/:id", // Use placeholder ":id" for dynamic ID
      handler: handler.editNoteByIdHandler,
    },
    {
      method: "DELETE",
      path: "/notes/:id", // Use placeholder ":id" for dynamic ID
      handler: handler.deleteNoteByIdHandler,
    },
  ];
};

module.exports = routes;
