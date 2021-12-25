const Constants = {
    Charactors: {
        '0xb0bb0c5d408c999eaaeaa408874b3b8535bc8fc4': {
            name: 'Bitcoin Holder',
            role: 'Fighter',
            dpmType: 'Physical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/BitcoinHolderBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/BitcoinHolderSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/BitcoinHolderMarket.png',
            rarityName: 'SSR',
            attr1: 'Vitality',
            attr2: 'Grit',
            address: '0xb0bB0C5D408c999eaaEAa408874B3b8535BC8fC4',
            workLocation: 'Warehouse'
        },
        '0xc4594afad15ab2d76440533023ff9c9839cbae9d': {
            name: 'Hacker',
            role: 'Assassin',
            dpmType: 'Magical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/HackerBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/HackerSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/HackerMarket.png',
            rarityName: 'SSR',
            attr1: 'Mentality',
            attr2: 'Stamina',
            address: '0xC4594aFAD15AB2d76440533023Ff9c9839cbAe9D',
            workLocation: 'Dark Castle'
        },
        '0x996877bfc830ee52b786675d211fdffd2493a0ea': {
            name: 'Altcoin Collector',
            role: 'Healer',
            dpmType: 'Magical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/AltcoinCollectorBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/AltcoinCollectorSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/AltcoinCollectorMarket.png',
            rarityName: 'SR',
            attr1: 'Stamina',
            attr2: 'Grit',
            address: '0x996877bfc830ee52b786675d211fdffd2493a0ea',
            workLocation: 'Warehouse'
        },
        '0x6741626ed9a06702d3dad18bdbe75983b66f38cc': {
            name: 'Hardware Miner',
            role: 'Mage',
            dpmType: 'Magical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/HardwareMinerBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/HardwareMinerSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/HardwareMinerMarket.png',
            rarityName: 'SR',
            attr1: 'Grit',
            attr2: 'Vitality',
            address: '0x6741626ed9A06702D3daD18bDbE75983b66f38cC',
            workLocation: 'Energy Station'
        },
        '0x5bc2f0ece4f7a85f5f323f7fdc80ff1028f417d4': {
            name: 'DeFi Farmer',
            role: 'Archer',
            dpmType: 'Physical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/DeFiFarmerBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/DeFiFarmerSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/DeFiFarmerMarket.png',
            rarityName: 'SR',
            attr1: 'Strength',
            attr2: 'Vitality',
            address: '0x5bC2F0ECe4F7A85F5F323f7FdC80fF1028F417d4',
            workLocation: 'Energy Station'
        },
        '0xd3f530521daaaeb3720c8d0e797ed38ca1f50305': {
            name: 'Scammer',
            role: 'Assassin',
            dpmType: 'Physical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/ScammerBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/ScammerSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/ScammerMarket.png',
            rarityName: 'SR',
            attr1: 'Dexterity',
            attr2: 'Stamina',
            address: '0xd3f530521DAAaEB3720C8d0E797Ed38cA1f50305',
            workLocation: 'Dark Castle'
        },
        '0x90b5f4a0ab7de9fc3028d2c0b67348ae1a4d3c25': {
            name: 'Spot Trader',
            role: 'Archer',
            dpmType: 'Physical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/SpotTraderBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/SpotTraderSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/SpotTraderMarket.png',
            rarityName: 'R',
            attr1: 'Vitality',
            attr2: 'Stamina',
            address: '0x90b5f4A0ab7dE9fC3028D2C0b67348aE1a4D3C25',
            workLocation: 'Gym'
        },
        '0xb8788bd7ec1a945585b5e76c473a6a7729994386': {
            name: 'Futures Lover',
            role: 'Fighter',
            dpmType: 'Physical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/FuturesLoverBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/FuturesLoverSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/FuturesLoverMarket.png',
            rarityName: 'R',
            attr1: 'Strength',
            attr2: 'Stamina',
            address: '0xb8788bD7eC1a945585B5E76C473a6A7729994386',
            workLocation: 'Gym'
        },
        '0x2a2635738e457cb81441e6a05fe690a69c2ef180': {
            name: 'Crypto OG',
            role: 'Mage',
            dpmType: 'Magical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/CryptoOGBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/CryptoOGSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/CryptoOGMarket.png',
            rarityName: 'R',
            attr1: 'Grit',
            attr2: 'Dexterity',
            address: '0x2a2635738E457cb81441e6a05FE690A69c2eF180',
            workLocation: 'Airport'
        },
        '0xa99a4fabb9a945f60fb96d6fdf8de7d2ef1e8c36': {
            name: 'Crypto BABY',
            role: 'Mage',
            dpmType: 'Magical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/CryptoBABYBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/CryptoBABYSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/CryptoBABYMarket.png',
            rarityName: 'R',
            attr1: 'Mentality',
            attr2: 'Dexterity',
            address: '0xa99a4FAbB9A945F60FB96d6fDf8dE7d2EF1e8C36',
            workLocation: 'Airport'
        },
        '0x419cee63cb9206b4df853dd6500ee522b154db49': {
            name: 'Bonus Hunter',
            role: 'Assassin',
            dpmType: 'Physical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/BonusHunterBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/BonusHunterSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/BonusHunterMarket.png',
            rarityName: 'R',
            attr1: 'Dexterity',
            attr2: 'Vitality',
            address: '0x419cee63cb9206B4df853dd6500eE522b154db49',
            workLocation: 'Post Office'
        },
        '0x1d44060bbb47d4c217c92cb3edffa0d33d7cf97c': {
            name: 'Shiller',
            role: 'Healer',
            dpmType: 'Magical',
            imgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/ShillerBig.png',
            listImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/character/ShillerSmall.png',
            marketImgUrl: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/market/ShillerMarket.png',
            rarityName: 'R',
            attr1: 'Stamina',
            attr2: 'Vitality',
            address: '0x1D44060BBb47D4c217c92CB3edfFA0d33d7cF97c',
            workLocation: 'Post Office'
        }
    },
    attributes: ['Strength', 'Dexterity', 'Vitality', 'Mentality', 'Grit', 'Stamina'],
    WorkPlaces: {
        'Milk Station': {
            name: 'Milk Station',
            stakingContractKey: 'staking_milkStationStaking',
            img: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/%08daily/MilkStation.png'
        },
        'Warehouse': {
            name: 'Warehouse',
            stakingContractKey: 'staking_warehouseStaking',
            img: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/%08daily/Warehouse.png'
        },
        'Energy Station': {
            name: 'Energy Station',
            stakingContractKey: 'staking_energyStationStaking',
            img: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/%08daily/EnergyStation%20.png',
        },
        'Gym': {
            name: 'Gym',
            stakingContractKey: 'staking_gymStaking',
            img: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/%08daily/Gym.png'
        },
        'Dark Castle': {
            name: 'Dark Castle',
            stakingContractKey: 'staking_darkCastleStaking',
            img: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/%08daily/DarkCastle.png'
        },
        'Post Office': {
            name: 'Post Office',
            stakingContractKey: 'staking_postOfficeStaking',
            img: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/%08daily/PostOffice.png'
        },
        'Airport': {
            name: 'Airport',
            stakingContractKey: 'staking_airportStaking',
            img: 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/%08daily/Airport.png'
        }
    },
    Contracts: {
        place_milkStation: "0x403A5D5D688EF221a0D7946B773c1314E82D80D9",
        staking_milkStationStaking: "0x9447e3eD2A23572F7Be359216321f7e67B364BaC",
        place_warehouse: "0x18A29bE4e131599B90eed8128a0497ca9DEB0f85",
        staking_warehouseStaking: "0xb8272f417c27CD7643B2E4357ce5cab65f376e38",
        place_energyStation: "0x878d94D0D69cd0629D137Cc08B0f55e63b46073A",
        staking_energyStationStaking: "0xd484911B843e61369b7a320949449a76e2366e62",
        place_gym: "0x664109833340eDb2eB7cC28bC9f244AC03a09962",
        staking_gymStaking: "0xfaB9DA2B15D486FA15624415E1883eEFFeEfD403",
        place_darkCastle: "0xA1417f950a3aAADF5843511a21bf8E343EEd7297",
        staking_darkCastleStaking: "0xD1dB401a1508A7da796d6C7103B22409b7D037fa",
        place_postOffice: "0xf8f24dA135775bcB974E8d525f1E409729313677",
        staking_postOfficeStaking: "0xde157716C077137525AF13882f3c725191FF60bf",
        place_airport: "0x56BF6baF3903c239a2dD0bF3f51eD895084c6226",
        staking_airportStaking: "0x4b0948EBd6410F448CF1FDaa1BC0c90d748a53EF",
        nftProxy: "0x6c7C71c36921D3227eCF27d34f9d8d4C53cDC8Df",
        role_bitcoinHolder: "0xb0bB0C5D408c999eaaEAa408874B3b8535BC8fC4",
        role_hacker: "0xC4594aFAD15AB2d76440533023Ff9c9839cbAe9D",
        role_altcoinCollector: "0x996877bfc830ee52b786675d211fdffd2493a0ea",
        role_hardwareMiner: "0x6741626ed9A06702D3daD18bDbE75983b66f38cC",
        role_deFiFarmer: "0x5bC2F0ECe4F7A85F5F323f7FdC80fF1028F417d4",
        role_scammer: "0xd3f530521DAAaEB3720C8d0E797Ed38cA1f50305",
        role_spotTrader: "0x90b5f4A0ab7dE9fC3028D2C0b67348aE1a4D3C25",
        role_futuresLover: "0xb8788bD7eC1a945585B5E76C473a6A7729994386",
        role_cryptoOG: "0x2a2635738E457cb81441e6a05FE690A69c2eF180",
        role_cryptoBABY: "0xa99a4FAbB9A945F60FB96d6fDf8dE7d2EF1e8C36",
        role_bonusHunter: "0x419cee63cb9206B4df853dd6500eE522b154db49",
        role_shiller: "0x1D44060BBb47D4c217c92CB3edfFA0d33d7cF97c",
    },
    ABIs: {
        staking_places: JSON.parse('[{"inputs":[{"internalType":"contract GameNFTProxy","name":"_nftProxy","type":"address"},{"internalType":"contract INFTWorkplace","name":"_workplace","type":"address"},{"internalType":"contract IGameRewardToken","name":"_rewardToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AdminRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"nftId","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"nftIds","type":"uint256[]"}],"name":"EmergencyMigrateStakeTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"nftId","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdrawReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"nftIds","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"HarvestAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"role","type":"string"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"RoleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"role","type":"string"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"RoleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"nftId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"nftIds","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawReward","type":"event"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"addRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"close","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nftId","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"emergencyMigrateStakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nftId","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nftId","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvestAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"isRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract GameNFTProxy","name":"_nftProxy","type":"address"},{"internalType":"contract INFTWorkplace","name":"_workplace","type":"address"},{"internalType":"contract IGameRewardToken","name":"_rewardToken","type":"address"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"migrateStakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"}],"name":"newRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftProxy","outputs":[{"internalType":"contract GameNFTProxy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nftId","type":"uint256"}],"name":"pendingRewardOfNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRewardOfUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"removeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IGameRewardToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"stakeCountOfUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakeInfo","outputs":[{"internalType":"uint256","name":"nftId","type":"uint256"},{"internalType":"uint256","name":"depositTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"stakeInfoOfUser","outputs":[{"internalType":"uint256[]","name":"_nftIds","type":"uint256[]"},{"internalType":"uint256","name":"_totalReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"updateStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nftId","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"workplace","outputs":[{"internalType":"contract INFTWorkplace","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'),
        nftProxyAbi: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AdminRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"string","name":"symbol","type":"string"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"}],"name":"Born","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint32","name":"exp","type":"uint32"}],"name":"Exp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"level","type":"uint16"}],"name":"Level","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"role","type":"string"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"RoleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"role","type":"string"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"RoleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum GameNFTProxy.Attribute[2]","name":"_attrs","type":"uint8[2]"}],"name":"addMainAttributes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IGameNFT","name":"_nft","type":"address"}],"name":"addNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IGameNFT[]","name":"_nfts","type":"address[]"}],"name":"addNFTs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"addRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"uint16","name":"_index","type":"uint16"}],"name":"breed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"close","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"dailyBornLimit","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"dailyBorns","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint32","name":"_exp","type":"uint32"}],"name":"exp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"info","outputs":[{"components":[{"internalType":"address","name":"nftAddress","type":"address"},{"internalType":"uint16","name":"nftIndex","type":"uint16"},{"internalType":"uint256","name":"dna","type":"uint256"},{"internalType":"uint64","name":"bornTime","type":"uint64"},{"internalType":"uint32","name":"exp","type":"uint32"},{"internalType":"uint16","name":"level","type":"uint16"},{"internalType":"uint16[6]","name":"attributes","type":"uint16[6]"},{"internalType":"uint16","name":"rarity","type":"uint16"},{"internalType":"uint16","name":"role","type":"uint16"}],"internalType":"struct GameNFTProxy.Info","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"isRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"levelDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"levelUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"mainAttrributes","outputs":[{"internalType":"enum GameNFTProxy.Attribute","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"metadata","outputs":[{"components":[{"internalType":"address","name":"nftAddress","type":"address"},{"internalType":"uint16","name":"nftIndex","type":"uint16"},{"internalType":"uint256","name":"dna","type":"uint256"},{"internalType":"uint64","name":"bornTime","type":"uint64"},{"internalType":"uint32","name":"exp","type":"uint32"},{"internalType":"uint16","name":"level","type":"uint16"}],"internalType":"struct GameNFTProxy.Metadata","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"}],"name":"newRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"nftOf","outputs":[{"internalType":"contract IGameNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nfts","outputs":[{"internalType":"contract IGameNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"removeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_v","type":"uint8"}],"name":"setDailyBornLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"enum GameNFTProxy.Attribute[2]","name":"_attrs","type":"uint8[2]"}],"name":"setMainAttributes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"contract IGameNFT","name":"_nft","type":"address"}],"name":"setNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTypes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'),
        roleAbi: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AdminRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"role","type":"string"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"RoleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"role","type":"string"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"RoleRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"addRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"attributes","outputs":[{"internalType":"uint16[6]","name":"_attrs","type":"uint16[6]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"attributes2","outputs":[{"internalType":"uint16[2]","name":"_attrs","type":"uint16[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"close","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"initialAttributes","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"isRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"majorAttributeIndex","outputs":[{"internalType":"enum IGameNFT.Attribute","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum IGameNFT.Attribute","name":"_major","type":"uint8"},{"internalType":"enum IGameNFT.Attribute","name":"_secondary","type":"uint8"}],"name":"markMainAttributteIndexes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"}],"name":"newRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rarity","outputs":[{"internalType":"enum IGameNFT.Rarity","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"role","type":"string"},{"internalType":"address","name":"account","type":"address"}],"name":"removeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"role","outputs":[{"internalType":"enum IGameNFT.Role","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secondaryAttributeIndex","outputs":[{"internalType":"enum IGameNFT.Attribute","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16[12]","name":"_initialAttributes","type":"uint16[12]"}],"name":"setInitialAttributes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    }
}

export default Constants;