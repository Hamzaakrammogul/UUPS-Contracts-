const {expect}= require('chai');

describe("Pluto Test", function(){

    this.beforeEach("Deploying the contract", async function(){
        this.PLUTO= await ethers.getContractFactory("PLUTO");
        this.PLUTOV2= await ethers.getContractFactory("PLUTOV2");
    });
    it("Goes to Pluto and check contracts name", async function(){
        const plutov1= await upgrades.deployProxy(this.PLUTO, {kind: 'uups'});
        expect(await plutov1.name()).to.equal("PLUTO");

        const plutov2= await upgrades.upgradeProxy(plutov1, this.PLUTOV2);
        expect(await plutov2.version()).to.equal("V2!");
    })
})