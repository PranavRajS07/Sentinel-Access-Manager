const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Database connected: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit with failure
  }
};

module.exports = dbConnect;
