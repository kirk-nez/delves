var percentage = 12
var progressBar = document.getElementById('progress-bar')

for (i = 0; i < 20; i++) {
    if (percentage < (i + 1) * 5) {
        progressBar.append('░')
    }
    else {
        progressBar.append('▓')
    }
}