export const connect = () => {
    const ws = new WebSocket('ws://localhost:4000')

    ws.addEventListener('open', () => {
        console.log('ws connected')
        ws.send('hello')
    })

    ws.addEventListener('close', () => {
        console.log('ws disconnected')
    })

    ws.addEventListener('error', (e) => {
        console.log('ws error:', e)
    })

    ws.addEventListener('message', (message) => {
        console.log('ws message', message)
    })
}

