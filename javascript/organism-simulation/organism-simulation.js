// Returns a random DNA base
const returnRandomBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandomBase())
    }
    return newStrand;
};

const organismFactory = (specimenNumber, dna) => {
    return {
      specimenNumber: specimenNumber,
      dna: dna,

      mutate() {
        let newBase = returnRandomBase();
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        while (this.dna[randomIndex] === newBase) {
          newBase = returnRandomBase();
        }
        this.dna[randomIndex] = newBase;
        return this.dna;
      },

      compareDNA(otherOrganism) {
        let commonDNA = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherOrganism[i]) {
            commonDNA++;
          }
        }
        const percentOfCommonDNA = ((commonDNA / this.dna.length) * 100).toFixed(2);
        console.log(`${this.speciesNumber} and ${otherOrganism.speciesNumber} have ${percentOfCommonDNA}% DNA in common.`);
      },

      willLikelySurvive() {
        const cOrGBases = this.dna.filter(base => {
          base === "C" || base === "G"
        });
        return cOrGBases.length/ this.dna.length >= 0.6;
      },
    }
};

const survivedSpecimen = [];
let idNumber = 1;

while (survivedSpecimen.length < 30) {
    let newOrganism = organismFactory(idNumber, mockUpStrand());
    if (newOrganism.willLikelySurvive()) {
     survivedSpecimen.push(newOrganism);
    }
     idNumber++;
}

console.log(survivedSpecimen);
