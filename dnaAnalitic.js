// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  };
  
  const pAequorFactory = (num, arr) => {
    return {
      specimenNum: num,
      dna: arr,
      mutate(){
         const randomIndex = arr[Math.floor(Math.random() * this.dna.length)];
          let newBase = returnRandBase();
          while (this.dna[randomIndex] === newBase){
          newBase = returnRandBase();
          }
          this.dna[randomIndex] = newBase;
          return this.dna;
      },
      compareDNA(otherPAequor) {
        let commonElements = this.dna.filter((element, index) => element === otherPAequor.dna[index]);
        let percentage = (commonElements.length / this.dna.length) * 100;
        console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common`);
      },
      willLikelySurvive() {
        const survivalBases = this.dna.filter(base => base === 'C' || base === 'G');
        return (survivalBases.length / this.dna.length) >= 0.6;
      }
      }
    };
  
  