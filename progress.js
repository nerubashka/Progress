console.log('Тестовое задание Progress')

function Progress() {
    this.load = function () {
        let progressInput = document.querySelector('input[type="text"].progress')
        let progressBar = document.querySelector('.progress-bar p')
        let value = 0

        progressInput.addEventListener('change', barAnimation)

        // функция для работы дуги загрузки при смене значения в поле Value
        function barAnimation() {
            const min = 0
            const max = 100
            let result = Number(progressInput.value)
            if (progressInput.value == '' || isNaN(result) || result < min) {
                result = min
                progressInput.value = min
            }
            else if (result > max) {
                result = max
                progressInput.value = max
            } else {
                result -= result % 1
                progressInput.value = result
            }

            let progressAnim = setInterval(() => {
                if (value < result)
                    value++
                else if (value > result)
                    value--
                progressBar.style.background = `conic-gradient(var(--primColor) ${value * 3.6}deg, var(--shadColor) 0%)`
                if (value == result)
                    clearInterval(progressAnim)
            })
        }

        // работа переключателя Hide
        let progressHide = document.querySelector('input[name="hide"].slideon')
        progressHide.addEventListener('change', () => {
            if (progressHide.checked) {
                progressBar.hidden = true
            } else {
                progressBar.hidden = false
            }
        })

        // работа переключателя Animate
        let progressAnimate = document.querySelector('input[name="animate"].slideon')
        progressAnimate.addEventListener('change', () => {
            if (progressAnimate.checked) {
                progressBar.style.animationPlayState = 'running'
            } else {
                progressBar.style.animationPlayState = 'paused'
            }
        })

        let sliders = document.querySelectorAll('.slideon')
        sliders.forEach(function (element) {
            var wrapper = document.createElement('label')
            wrapper.className = element.classList

            var slider = document.createElement('span')
            slider.className = 'slideon-slider'

            element.after(wrapper)
            wrapper.appendChild(element)
            element.after(slider)
        })
    }
}

let progress = new Progress()
progress.load()