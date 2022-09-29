async function main (){
    this.PLUTO= await ethers.getContractFactory("PLUTO");
    this.PLUTOV2= await ethers.getContractFactory("PLUTOV2");
    await upgrades.upgradeProxy('0x52d13054a8e4d00ef8FbE5cdBF27F16a62D256ac', this.PLUTOV2);
}


main()
.then(()=> process.exit(0))
.catch(error=>{
    console.error(error)
    process.exit(1)
})