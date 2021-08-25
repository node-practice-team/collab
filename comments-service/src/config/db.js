let db = null;

const connect = (database) => {
  try {
    db = database;
  } catch (error) {
    console.log(error);
  }
};

const get = () => {
  try {
    return db;
  } catch (error) {
    console.log(error);
  }
};

function close() {
  db.close();
}

module.exports = {
  connect,
  get,
  close,
};
