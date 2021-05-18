let board = {

    "territories" : [

        {   
            "name" : "Go",
            "position" : 0,
            "type" : "go",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "mortgageValue" : null,
            "color" : null,
            "groupe" : []
        },

        {
            "name" : "Old Kent Road",
            "position" : 1,
            "type" : "property",
            "price" : 60,
            "rent" : 2,
            "multipliedRent" : [10,30,90,160,250],
            "housecost" : 50,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [1,3]
        },

        {
            "name" : "Community Chest",
            "position" : 2,
            "type" : "communityChest",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : null,
            "groupe" : []
        },

        {
            "name" : "Whitechapel",
            "position" : 3,
            "type" : "property",
            "price" : 60,
            "rent" : 4,
            "multipliedRent" : [20,60,180,320,450],
            "housecost" : 50,
            "ownedBy" : null,
            "isMortgaged" : null,
            "mortgageValue" : 30,
            "color" : "#854b37",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [1,3]
        },
        
        {  
            "name" : "Income Tax",
            "position" : 4,
            "type" : "incomeTax",
            "price" : 200,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {
            "name" : "Kings Cross",
            "position" : 5,
            "type" : "property",
            "price" : 200,
            "rent" : 25,
            "multipliedRent" : [25,50,100,200],
            "housecost" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "mortgageValue" : 100,
            "color" : "white",
            "houses" : 0,
            "hotels" : 0,
        },

        {
            "name" : "Islington",
            "position" : 6,
            "type" : "property",
            "price" : 100,
            "rent" : 6,
            "multipliedRent" : [30,90,270,400,550],
            "housecost" : 50,
            "ownedBy" : null,
            "isMortgaged" : null,
            "mortgageValue" : 50,
            "color" : "#abdbef",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [6,8,9]
        },

        {
            "name" : "Chance",
            "position" : 7,
            "type" : "chance",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "mortgageValue" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {
            "name" : "Euston Road",
            "position" : 8,
            "type" : "property",
            "price" : 100,
            "rent" : 6,
            "multipliedRent" : [30,90,270,400,550],
            "housecost" : 50,
            "mortgageValue" : 50,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#abdbef",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [6,8,9]
        },

        {
            "name" : "Pent.V Road",
            "position" : 9,
            "type" : "property",
            "price" : 120,
            "rent" : 8,
            "multipliedRent" : [40,100,300,450,600],
            "housecost" : 50,
            "mortgageValue" : 60,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#abdbef",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [6,8,9]
        },

        {
            "name" : "Jail",
            "position" : 10,
            "type" : "jail",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {
            "name" : "Pall Mall",
            "position" : 11,
            "type" : "property",
            "price" : 140,
            "rent" : 10,
            "multipliedRent" : [50,150,450,625,750],
            "housecost" : 100,
            "mortgageValue" : 70,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#c53982",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [11,13,14]
        },

        {
            "name" : "Electric Company",
            "position" : 12,
            "type" : "electricCompany",
            "price" : 150,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37"
        },

        {
            "name" : "What??",
            "position" : 13,
            "type" : "property",
            "price" : 140,
            "rent" : 10,
            "multipliedRent" : [50,150,450,525,750],
            "housecost" : 100,
            "mortgageValue" : 70,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#c53982",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [11,13,14]
        },

        {
            "name" : "Northumrl\'d",
            "position" : 14,
            "type" : "property",
            "price" : 160,
            "rent" : 12,
            "multipliedRent" : [60,180,500,700,900],
            "housecost" : 100,
            "mortgageValue" : 80,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#c53982",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [11,13,14]
        },

        {
            "name" : "Marylbone Station",
            "position" : 15,
            "type" : "property",
            "price" : 200,
            "rent" : 25,
            "multipliedRent" : [25,50,100,200],
            "housecost" : null,
            "mortgageValue" : 100,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "white",
            "houses" : 0,
            "hotels" : 0
        },

        {
            "name" : "Bow Street",
            "position" : 16,
            "type" : "property",
            "price" : 180,
            "rent" : 14,
            "multipliedRent" : [70,200,550,750,950],
            "housecost" : 100,
            "mortgageValue" : 90,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#e98b29",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [16,18,19]
        },

        {
            "name" : "Community Chest",
            "position" : 17,
            "type" : "communityChest",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {
            "name" : "Marlborough",
            "position" : 18,
            "type" : "property",
            "price" : 180,
            "rent" : 14,
            "multipliedRent" : [70,200,550,750,950],
            "housecost" : 100,
            "mortgageValue" : 90,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#e98b29",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [16,18,19]
        },

        {
            "name" : "Vine Street",
            "position" : 19,
            "type" : "property",
            "price" : 200,
            "rent" : 16,
            "multipliedRent" : [80,220,600,800,1000],
            "housecost" : 100,
            "mortgageValue" : 100,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#e98b29",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [16,18,19]
        },

        {
            "name" : "Parking",
            "position" : 20,
            "type" : "parking",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {
            "name" : "Strand",
            "position" : 21,
            "type" : "property",
            "price" : 220,
            "rent" : 18,
            "multipliedRent" : [90,250,700,875,1050],
            "housecost" : 150,
            "mortgageValue" : 110,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#DA2327",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [21,23,24]
        },

        {
            "name" : "Chance",
            "position" : 22,
            "type" : "chance",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {
            "name" : "Fleet Street",
            "position" : 23,
            "type" : "property",
            "price" : 220,
            "rent" : 18,
            "multipliedRent" : [90,250,700,875,1050],
            "housecost" : 150,
            "mortgageValue" : 110,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#DA2327",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [21,23,24]
        },

        {
            "name" : "Trafalgar Square",
            "position" : 24,
            "type" : "property",
            "price" : 240,
            "rent" : 20,
            "multipliedRent" : [100,300,750,925,1100],
            "housecost" : 150,
            "mortgageValue" : 120,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#DA2327",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [21,23,24]
        },

        {
            "name" : "Fenchurch Station",
            "position" : 25,
            "type" : "property",
            "price" : 200,
            "rent" : 25,
            "multipliedRent" : [25,50,100,200],
            "housecost" : null,
            "mortgageValue" : 100,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "white",
            "houses" : 0,
            "hotels" : 0
        },

        {
            "name" : "Leicester Square",
            "position" : 26,
            "type" : "property",
            "price" : 260,
            "rent" : 22,
            "multipliedRent" : [110,330,800,975,1150],
            "housecost" : 150,
            "mortgageValue" : 130,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#fef102",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [26,28,29]
        },

        {
            "name" : "Water Works",
            "position" : 27,
            "type" : "waterwork",
            "price" : 260,
            "rent" : 22,
            "multipliedRent" : [110,330,800,975,1150],
            "housecost" : 150,
            "mortgageValue" : 130,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#fef102",
            "groupe" : []
        },

        {
            "name" : "Coventry Street",
            "position" : 28,
            "type" : "property",
            "price" : 150,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [26,28,29]
        },

        {
            "name" : "Piccadilly",
            "position" : 29,
            "type" : "property",
            "price" : 280,
            "rent" : 24,
            "multipliedRent" : [120,320,850,1025,1200],
            "housecost" : 150,
            "mortgageValue" : 140,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#fef102",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [26,28,29]
        },

        {
            "name" : "Go To Jail",
            "position" : 30,
            "type" : "goToJail",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : 60,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {   
            "name" : "Regent Street",
            "position" : 31,
            "type" : "property",
            "price" : 300,
            "rent" : 26,
            "multipliedRent" : [130,390,900,1100,1275],
            "housecost" : 200,
            "mortgageValue" : 150,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "green",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [31,32,34]
        },

        {
            "name" : "Oxford Street",
            "position" : 32,
            "type" : "property",
            "price" : 300,
            "rent" : 26,
            "multipliedRent" : [130,390,900,1100,1275],
            "housecost" : 200,
            "mortgageValue" : 150,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "green",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [31,32,34]
        },

        {
            "name" : "Community Chest",
            "position" : 33,
            "type" : "communityChest",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {
            "name" : "Bond Street",
            "position" : 34,
            "type" : "property",
            "price" : 320,
            "rent" : 28,
            "multipliedRent" : [150,450,1000,1200,1400],
            "housecost" : 200,
            "mortgageValue" : 160,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "green",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [31,32,34]
        },

        {
            "name" : "Liverpool Station",
            "position" : 35,
            "type" : "property",
            "price" : 200,
            "rent" : 25,
            "multipliedRent" : [25,50,100,200],
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "white",
            "houses" : 0,
            "hotels" : 0
        },

        {
            "name" : "Chance",
            "position" : 36,
            "type" : "chance",
            "price" : null,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {
            "name" : "Park Lane",
            "position" : 37,
            "type" : "property",
            "price" : 350,
            "rent" : 35,
            "multipliedRent" : [175,500,1100,1300,1500],
            "housecost" : 200,
            "mortgageValue" : 175,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#0065a3",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [37,39]
        },

        {
            "name" : "Super Tax",
            "position" : 38,
            "type" : "superTax",
            "price" : 100,
            "rent" : null,
            "multipliedRent" : null,
            "housecost" : null,
            "mortgageValue" : null,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#854b37",
            "groupe" : []
        },

        {
            "name" : "Mayfair",
            "position" : 39,
            "type" : "property",
            "price" : 400,
            "rent" : 50,
            "multipliedRent" : [200,600,1400,1700,2000],
            "housecost" : 200,
            "mortgageValue" : 200,
            "ownedBy" : null,
            "isMortgaged" : null,
            "color" : "#0065a3",
            "houses" : 0,
            "hotels" : 0,
            "groupe" : [37,39]
        }



    ]

}

module.exports = {board};