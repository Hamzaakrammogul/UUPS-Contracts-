async function main (){

    this.PLUTO = await ethers.getContractFactory("PLUTO");
    await upgrades.deployProxy(this.PLUTO, {kind: "uups"});
}

main()
.then(()=> process.exit(0))
.catch (error =>{
    console.error(error)
    process.exit(1)
})