import io from 'socket.io-client';

let socket;

const URL = 'http://localhost:3001';

export const init = () => {
  console.log('Sunucuya bağlanılıyor ...');

  socket = io(URL, {
    transports: ['websocket'],
  });

  socket.on('connect', () => {
    console.log('Sunucuya bağlantı başarılı bir şekilde gerçekleştirild 🎉 ');
  });
};

export const send = (color) => {
  socket.emit('newColor', color);
};

export const subscribe = (callback) => {
  socket.on('receive', (color) => {
    console.log(color);
    callback(color);
  });
};
