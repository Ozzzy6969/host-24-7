const mongoose = require('mongoose');
const config = require('../../config/config.json');
const time = 1000*3 // 3 segundos
module.exports = client => {
    //Nos conectamos a la base de datos

    mongoose.connect(config.mongodb)
    mongoose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`
        ╔═════════════════════════════════════════════════════╗
        ║                                                     ║
        ║       Conectado a la base de datos de MONGODB!      ║
        ║                                                     ║
        ╚═════════════════════════════════════════════════════╝`.blue)
    }).catch((err) => {
        console.log(`☁ ERROR AL CONECTAR A LA BASE DE DATOS DE MONGODB`.red);
        console.log(err)
    })

    console.log( `Conectado como ${client.user.tag}`.green)
    let status = [[{name : '🔞🖤│Free • Nudes', type: 'PLAYING'}], [{name : '🔞🖤│Free • Nudes', type: 'WATCHING'}]]
    setInterval(() => {
        function randomStatus() {
            let rstatus = status[Math.floor(Math.random() * status.length)];
            client.user.setPresence({ activities: rstatus, status: 'online' });
        } 
        randomStatus();
    
    }, time)

}
