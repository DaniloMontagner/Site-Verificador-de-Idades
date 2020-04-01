function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Formulário errado, tente novamente!')
        
       
    } else {
        var fSexo = document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        
        

        if(fSexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', '../img/baby_boy.png')

            } else if (idade < 13) {
                //criança
                img.setAttribute('src', '../img/kid_boy.png')

            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', '../img/teen_boy.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '../img/adult_man.png')
            } else {
                //idoso
                img.setAttribute('src', '../img/old_man.png')
            }
         } else {
             genero = 'Mulher'
             if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', '../img/baby_girl.png')
             } else if (idade < 13) {
                //criança 
                img.setAttribute('src', '../img/kid_girl.png')
             } else if (idade < 18) {
                 //adolescente
                 img.setAttribute('src', '../img/teen_girl.png')
             } else if (idade <= 50) {
                 //adulta
                 img.setAttribute('src', '../img/adult_woman.png')
             } else {
                 //idosa
                 img.setAttribute('src', '../img/old_woman.png')
             }
         }
        
        res.style.textAlign = 'center'
        
        res.innerHTML = `Detectamos: <strong>${genero}</strong> com <strong>${idade}</strong> anos de idade`  //muda o texto de res
        res.appendChild(img)       
    }
    
    
}