let db = null;

//CONNECT METHOD 
const connect = (database) => {
  try {
    db = database;
  } catch (error) {
    console.log(error);
  }
};

//GET COLLECTION METHOD 
const get = () => {
  try {
    return db;
  } catch (error) {
    console.log(error);
  }
};

//CLOSE DATABASE
function close() {
  db.close();
}

module.exports = {
  connect,
  get,
  close,
};
