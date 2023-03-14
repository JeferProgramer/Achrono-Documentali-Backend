import app from "./src/app";
import connectDB from "./src/db";

try {
    app.listen(app.get('port'))
    console.log('server on port', app.get('port'))
    connectDB()
} catch (error) {
    console.error(error)
}
