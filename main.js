const url= "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json"
const posicao= 0

const eleif = (url) => {
   fetch(url)
        .then(response => response.json())
        .then(data =>{
         const vt1 = Number(data.cand[0].vap)
         const vt2= Number(data.cand[1].vap)
         // const circle = document.querySelector('#circleProgress')
         const porcentagem ='100,0'
         const numero = porcentagem.replace(",",".")
         // circle.style.strokeDashoffset = 440 - (440 * numero)/100
        cand1.textContent = data.cand[0].nm
        porc1.textContent = `${data.cand[0].pvap}%`
        cand2.textContent = data.cand[1].nm
        porc2.textContent = `${data.cand[1].pvap}%`
        voto1.textContent = `${vt1.toLocaleString()}`
        voto2.textContent =`${vt2.toLocaleString()}`
        st1.textContent = data.cand[0].st
        st2.textContent = data.cand[1].st
        pst1.textContent= `${data.pst}% das seções totalizadas`



        if (data.cand[0].nm =="LULA"){
         fotop1.src="https://resultados.tse.jus.br/oficial/ele2022/545/fotos/br/280001607829.jpeg"
         fotop2.src="https://resultados.tse.jus.br/oficial/ele2022/545/fotos/br/280001618036.jpeg"

      }else{
         fotop2.src="https://resultados.tse.jus.br/oficial/ele2022/545/fotos/br/280001607829.jpeg"
         fotop1.src="https://resultados.tse.jus.br/oficial/ele2022/545/fotos/br/280001618036.jpeg"
      }


        }

        )




        .catch(error => console.error(error))
}







eleif(url)







const eleie = () => {
   fetch("https://resultados.tse.jus.br/oficial/ele2022/547/dados-simplificados/pe/pe-c0003-e000547-r.json")
        .then(response => response.json())
        .then(data => {
            console.table(data.pst)
            const vt1 = Number(data.cand[0].vap)
            const vt2= Number(data.cand[1].vap)
            cand10.textContent = data.cand[0].nm
            porc10.textContent = `${data.cand[0].pvap}%`
            cand20.textContent = data.cand[1].nm
            porc20.textContent = `${data.cand[1].pvap}%`
            voto10.textContent = `${vt1.toLocaleString()}`
            voto20.textContent = `${vt2.toLocaleString()}`
            st10.textContent = data.cand[0].st
            st20.textContent = data.cand[1].st
            pst10.textContent=`${data.pst}% das seções totalizadas`
        if (data.cand[0].nm =="MARÍLIA ARRAES"){
         fotop10.src="https://resultados.tse.jus.br/oficial/ele2022/547/fotos/pe/170001610442.jpeg"
         fotop20.src="https://resultados.tse.jus.br/oficial/ele2022/547/fotos/pe/170001604087.jpeg"

      }else{
         fotop20.src="https://resultados.tse.jus.br/oficial/ele2022/547/fotos/pe/170001610442.jpeg"
         fotop10.src="https://resultados.tse.jus.br/oficial/ele2022/547/fotos/pe/170001604087.jpeg"
      }
        })



        .catch(error => console.error(error))
}

eleie()
