let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ['.com' , '.net' , '.org' , '.co'];


  function generateDomain (pronoun, adj, noun, extension) {
    for (let i=0 ; i<pronoun.length; i++){
        for (let j= 0; j<adj.length; j++){
            for (let k= 0; k<adj.length; k++){
                for (let l= 0; l<adj.length; l++){
                    console.log(`${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`);
                }
            }
        }
    }
  }
  generateDomain(pronoun, adj, noun , extension);