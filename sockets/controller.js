
const socketController =  (socket) => {
    
    console.log('cliente conectaduns', socket.id);
    

    socket.on('disconnect', ()=> {
        console.log('cliente desconectaduns', socket.id);
    });
 
    // client.on('event', data => { /* … */ });
    //client.on('disconnect', () => { /* … */ });
    socket.on('enviar-mensaje', (payload, callback)=>{
        
        const id = 123456;
        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload)
    })
  }

module.exports = socketController;