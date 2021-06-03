const init = () => {
    let runnner
    let runCountdown

    const spawnRunner = () => {
        runner = document.createElement('div')
        runner.id = 'runner'
        runner.dataset.state = 'waiting'
        moveRunner()
        
        runner.addEventListener('mouseover', () => {
            runCountdown = setTimeout(moveRunner, 200)
            runner.dataset.state = 'running'
        })
        runner.addEventListener('mousedown', () =>{
            clearTimeout(runCountdown)
            runner.dataset.state = 'caught'
        })
        runner.addEventListener('mouseup', () =>{
            moveRunner()
        })
    }

    const moveRunner = () => {
        let newLocation = document.querySelector(`#div-${Math.ceil(Math.random() * 10)}`)
        newLocation.append(runner)
    }
    
    
    spawnRunner()
}

document.addEventListener('DOMContentLoaded', init)