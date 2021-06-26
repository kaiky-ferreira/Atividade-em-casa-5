async function csvField(url, campo){
    let list = [];
    let a ;
     return await axios.get(url).then( function(response){   
        let obj = $.csv.toObjects(response.data);
        for(var i=0; i< obj.length;i++){
            for(var aux in obj[i]){
                if(aux == campo)
                    list.push(obj[i][aux]);         
            }
        }
                     
    }).then(res => list);   
}

async function main (){
    
    const list1 = await csvField('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Character');
    const list2 = await csvField('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Description/role');
    let ul, li, conteudo, sublista, elementoSubLista, conteudoElementoSubLista;
    for(let i = 0; i < list1.length; i++){
        let lista = document.createElement('ul'); 
        let elementoLista = document.createElement('li'); 
        let conteudoElementoLista = document.createTextNode(list1[i]);
  
        elementoLista.appendChild(conteudoElementoLista);
        lista.appendChild(elementoLista);
  
        let subLista = document.createElement('ul'); 
        let elementoSubLista = document.createElement('li'); 
        let conteudoElementoSubLista = document.createTextNode(list2[i]);
  
        elementoSubLista.appendChild(conteudoElementoSubLista);
        subLista.appendChild(elementoSubLista);
  
        lista.appendChild(subLista);
  
        let estilo1 = document.createAttribute('class');
        estilo1.value = "lista";
        elementoLista.setAttributeNode(estilo1);
        
        let estilo2 = document.createAttribute('class');
        estilo2.value = "sublista";
        elementoSubLista.setAttributeNode(estilo2);
  
        document.getElementById('caixa').insertAdjacentElement('beforeend', lista);
  
     } 
  
  }






window.onload = () => {

    main()

}

