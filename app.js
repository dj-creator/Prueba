const correctAnswers = [ "B", "A", "C", "B", "A"];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener( 'submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.pregunta1.value , form.pregunta2.value, form.pregunta3.value, form.pregunta4.value, form.pregunta5.value];
     
    //check answers
    //index is the position in the array 
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index] ){
            score += 20;
        }
    })

    scrollTo(0,0);
    //Shows results on page
    result.querySelector('span').textContent = `${score}%`
    result.classList.remove('d-none');

    // Gives the increasing number animation
    let output = 0;
    const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++
        }
    },10)
})  

//Window objects 

// console.log('hello');
// window.console.log('hola');


// let i = 0
// const timer = setInterval(() =>{
//     console.log('hello');
//     i++
//     if(i===5){
//         clearInterval(timer)
//     }
// },1000)