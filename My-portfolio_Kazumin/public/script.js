const animation = document.querySelectorAll('.textAnimation');

for (let i = 0; i < animation.length; i++) {
    const targetEleme = animation[i];
    texts = targetEleme.textContent,
    textsArray = [];

    targetEleme.textContent = "";
    
    for(let h = 0; h < texts.split("").length; h++) {
        const space  = texts.split("")[h];
        if (space === " ") {
            textsArray.push(" ");
        } else {
            textsArray.push('<span><span style="animation-delay: ' + ((h * .1) + .1) + 's;">' + space + '</span></span>')
        }
    }
    for(let j = 0; j < textsArray.length; j++) {
        targetEleme.innerHTML += textsArray[j];
    };
};

