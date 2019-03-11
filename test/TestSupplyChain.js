// This script is designed to test the solidity smart contract - SuppyChain.sol -- and the various functions within
// Declare a variable and assign the compiled smart contract artifact

require('babel-register')

var SupplyChain = artifacts.require('../contracts/winebase/SupplyChain.sol')

contract('SupplyChain', function(accounts) {
    // Declare few constants and assign a few sample accounts generated by ganache-cli
    const bottleId = 1;
    const deployerID = accounts[0]
    const producerID = accounts[1]
    const distributorID = accounts[2]
    const retailerID = accounts[3]
    const customerID = accounts[4]
    const farmLatitude = "17.809356"
    const farmLongitude = "74.934207"
    const farmAddress = "Shipaiwadi, Motewadi, Maharashtra"
    const farmID = 1;
    const farmName = "Fratelli Vineyards"
    const grapesId = 1;
    const grapesNotes = "The sweet taste and excellent nutritional benefits of our pesticide-free berries. Carefully cultivated to ensure that they have no pesticide residue, and packed with love."
    const vintageYear = 2012
    const winePrice = web3.utils.toWei("1", "ether")
    const productNotes = "Aromas of fragrant spring blossom, orchard fruit, hazelnut and bread crust lead the nose on this refined white. The elegantly structured palate offers creamy yellow apple, lemon drop and mineral alongside crisp acidity that leaves a tangy finish. Made with a red grape, this unique white Sangiovese is a first for India."


    console.log("ganache-cli accounts used here...")
    console.log("Contract Owner: accounts[0] ", accounts[0])
    console.log("Producer: accounts[1] ", accounts[1])
    console.log("Distributor: accounts[2] ", accounts[2])
    console.log("Retailer: accounts[3] ", accounts[3])
    console.log("Consumer: accounts[4] ", accounts[4])

    it("Deployer assigned to each role", async () => {
	    // Get deployed contract
	    let instance = await SupplyChain.deployed();
	    // Perform a function of the contract
	    let isProducer 		= await instance.isProducer(deployerID);
	    let isDistributor 	= await instance.isDistributor(deployerID);
	    let isRetailer 		= await instance.isRetailer(deployerID);
	    let isCustomer		= await instance.isCustomer(deployerID);
	    // Assert if result is equal to something, and if not send a message
	    assert.isTrue(isProducer, "creator is producer");
	    assert.isTrue(isDistributor, "creator is distributor");
	    assert.isTrue(isRetailer, "creator is retailer");
	    assert.isTrue(isCustomer, "creator is customer");
  	})

    // 1st Test
    it("Testing smart contract function harvestGrapes() that allows producer to harvest grapes", async() => {

        const supplyChain = await SupplyChain.deployed();

        await supplyChain.addProducer(producerID, {from: deployerID});

        await supplyChain.registerFarm(farmName, farmLatitude, farmLongitude, farmAddress, {from: producerID});

        // Mark an item as Harvested by calling function harvestItem()
        await supplyChain.harvestGrapes(grapesNotes, vintageYear, farmID, {from: producerID});

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
         
        const resultGrapes = await supplyChain.getGrapesInfo.call(grapesId);
        // Verify the result set
        assert.equal(resultGrapes[0], grapesId, 'Error: Missing or Invalid Grapes ID')
        assert.equal(resultGrapes[1], grapesNotes, 'Error: Missing or Invalid Grapes Notes')
        assert.equal(resultGrapes[2], vintageYear, 'Error: Missing or Invalid Vintage Year')
        assert.equal(resultGrapes[3], 0, 'Error: Missing or Invalid Grapes State')
        assert.equal(resultGrapes[4], farmID, 'Error: Missing or Invalid Farm ID')
        assert.equal(resultGrapes[5], farmName, 'Error: Missing or Invalid Farm Name')
        assert.equal(resultGrapes[6], farmLatitude, 'Error: Missing or Invalid Farm Latitude')
        assert.equal(resultGrapes[7], farmLongitude, 'Error: Missing or Invalid Farm Longitude')
        assert.equal(resultGrapes[8], farmAddress, 'Error: Missing or Invalid Farm Address')
    })    

    // 2nd Test
    it("Testing smart contract function processItem() that allows a farmer to process coffee", async() => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a variable for event
        
        
        // Watch the emitted event Processed()
        

        // Mark an item as Processed by calling function processtItem()
        

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        

        // Verify the result set
        
    })    

    // 3rd Test
    it("Testing smart contract function packItem() that allows a farmer to pack coffee", async() => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a variable for event
        
        
        // Watch the emitted event Packed()
        

        // Mark an item as Packed by calling function packItem()
        

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        

        // Verify the result set
        
    })    

    // 4th Test
    it("Testing smart contract function sellItem() that allows a farmer to sell coffee", async() => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a variable for event
        
        
        // Watch the emitted event ForSale()
        

        // Mark an item as ForSale by calling function sellItem()
        

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        

        // Verify the result set
          
    })    

    // 5th Test
    it("Testing smart contract function buyItem() that allows a distributor to buy coffee", async() => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a variable for event
        
        
        // Watch the emitted event Sold()
        var event = supplyChain.Sold()
        

        // Mark an item as Sold by calling function buyItem()
        

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        

        // Verify the result set
        
    })    

    // 6th Test
    it("Testing smart contract function shipItem() that allows a distributor to ship coffee", async() => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a variable for event
        
        
        // Watch the emitted event Shipped()
        

        // Mark an item as Sold by calling function buyItem()
        

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        

        // Verify the result set
              
    })    

    // 7th Test
    it("Testing smart contract function receiveItem() that allows a retailer to mark coffee received", async() => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a variable for event
        
        
        // Watch the emitted event Received()
        

        // Mark an item as Sold by calling function buyItem()
        

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        

        // Verify the result set
             
    })    

    // 8th Test
    it("Testing smart contract function purchaseItem() that allows a consumer to purchase coffee", async() => {
        const supplyChain = await SupplyChain.deployed()
        
        // Declare and Initialize a variable for event
        
        
        // Watch the emitted event Purchased()
        

        // Mark an item as Sold by calling function buyItem()
        

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        

        // Verify the result set
        
    })    

    // 9th Test
    it("Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        
        
        // Verify the result set:
        
    })

    // 10th Test
    it("Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain", async() => {
        const supplyChain = await SupplyChain.deployed()

        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        
        
        // Verify the result set:
        
    })

});