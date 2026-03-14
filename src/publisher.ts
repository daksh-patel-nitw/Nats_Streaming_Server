import nats from 'node-nats-streaming';

const stan = nats.connect('ticketing','abc',{
    url: 'http://localhost:4222'
});

console.clear();

stan.on('connect',()=>{
    console.log('Publisher connected to NATS');

    const data=JSON.stringify({
        id: '123',
        title: 'concert',
        price:20
    })

    //channel, data, callback function after the data is published to the channel.
    stan.publish('ticket:created',data,()=>{
        console.log('Event published.');
    })
});