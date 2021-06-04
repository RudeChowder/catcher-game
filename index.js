const init = () => {
    let runnner
    let runCountdown

    const moveRunner = () => {
        let newLocation = document.querySelector(`#div-${Math.ceil(Math.random() * 16)}`)
        newLocation.append(runner)
        runner.dataset.state = 'waiting'
        runner.src = './img/waiting.png'
    }

    const spawnRunner = () => {
        runner = document.createElement('img')
        runner.id = 'runner'
        runner.dataset.state = 'waiting'
        runner.src = './img/waiting.png'
        moveRunner()
        
        runner.addEventListener('mouseover', () => {
            runCountdown = setTimeout(moveRunner, 150)
            runner.dataset.state = 'running'
            runner.src = './img/running.png'
        })
        runner.addEventListener('mousedown', (event) =>{
            event.preventDefault()
            clearTimeout(runCountdown)
            runner.dataset.state = 'caught'
            runner.src = './img/caught.png'
        })
        runner.addEventListener('mouseup', () =>{
            moveRunner()
        })
        runner.addEventListener('mouseout', () =>{
            moveRunner()
        })
    }

    spawnRunner()
}

document.addEventListener('DOMContentLoaded', init)