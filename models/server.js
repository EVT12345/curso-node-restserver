const express = require('express');
const cors = require ('cors');
const routers = require('../routes/usuarios');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath ='/api/usuarios';
        
        
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y Parseo del Body
        this.app.use(express.json());
        
        // Directorio Publico
        this.app.use(express.static('public'));

    }

    routes (){

        this.app.use(this.usuarioPath,routers);
       
    }

    listen(){

        this.app.listen( this.port ,()=>{
            console.log('Servidor corriendo en Puerto : ',this.port);
        });


    }

}

module.exports = Server ;