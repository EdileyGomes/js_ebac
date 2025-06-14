function filmess() {
    let nome = 'Ediley'
    function filmeAcao() {
        console.log(`Olá, ${nome}! Você gosta de filmes de ação?`)
    }
    function filmeComedia() {
        console.log(`Olá, ${nome}! Você gosta de filmes de comédia?`)
    }
    return {
        filmeAcao: filmeAcao,
        filmeComedia: filmeComedia
    }
}

let filme = filmess()
filme.filmeAcao ()