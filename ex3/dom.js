const caixa1= document.getElementById('caixa1')// caixa 2
const caixa2= document.getElementById('caixa2')//caix 1
const btn = document.querySelector('#btn_copiar')//botão 
const TodosOsCursos = [...document.querySelectorAll('.curso')]




TodosOsCursos.map((el)=>{
   el.addEventListener('click',(evt)=>{
        const curso=evt.target
        
        curso.classList.toggle("selecionado")
         
   
   })

})

btn.addEventListener('click',()=>{
    const cursoSelected = [...document.querySelectorAll('.selecionado')]
    cursoSelected.map((el)=>{
        caixa2.appendChild(el)
        
    })

    const cursonaoselecionado =[...document.querySelectorAll('.curso:not(.selecionado)')]
    
    cursonaoselecionado.map((el)=>{
        caixa1.appendChild(el)
    })
})

