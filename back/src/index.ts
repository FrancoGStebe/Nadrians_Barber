import "reflect-metadata";
import server from "./server";
import { DB_PORT, PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(()=>{
    console.log(`DataBase connected on port ${DB_PORT}`);
    server.listen(PORT, () => {
    console.log(`estoy en el puerto ${PORT}`);
    })
})
.catch(error => console.log(error));

