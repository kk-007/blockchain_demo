module.exports.address = "0x2050e50e25659ca67d1d6961d3ccf3002f722bc7";
module.exports.ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_data",
				"type": "string"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"components": [
					{
						"name": "id",
						"type": "uint256"
					},
					{
						"name": "name",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];