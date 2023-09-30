const carMarket = require("./obj.js");

// Search for a car agency by its name or ID.-------------------------------------------------------------

// for (agency of carMarket.sellers) {
//     if (agency.agencyId === "Plyq5M5AZ")
//     console.log('agency name:' + agency.agencyName);
// }

// Retrieve all agencies' names.-------------------------------------------------------------------------

// for (agency of carMarket.sellers) {}
//     console.log('agency name:' + agency.agencyName);

// Add a new car to an agency's inventory.---------------------------------------------------------------

// for (agency of carMarket.sellers) {
//   if (agency.agencyId === "Plyq5M5AZ"){
//     agency.cars.push({
//       brand: "Ferarri",
//       models: [
//         {
//           name: "GT",
//           year: 2022,
//           price: 290000,
//           carNumber: "ppp91",
//           ownerId: "Plyq5M5AZ",
//         },
//       ],
//     });
//     console.log(JSON.stringify(agency, null, 2));
// }
// }

// Remove a car from an agency's inventory-----------------------------------------------------------------

// for (const agency of carMarket.sellers) {
//     if (agency.agencyId === "Plyq5M5AZ") {
//         for (const car of agency.cars) {
//             if (car.brand === 'bmw') {
//                 const indexToRemove = car.models.findIndex(model => model.name === '3');
//                 car.models.splice(indexToRemove, 1);
//             }}
//             console.log(JSON.stringify(agency, null, 2));
//         }
//     }

// Change the cash or credit of an agency.--------------------------------------------------------------------

// for (const agency of carMarket.sellers) {
//         if (agency.agencyId === "Plyq5M5AZ") {
//             agency.cash += 500
//             console.log(agency);
//         }}

// Update the price of a specific car in an agency (Method:  updateCarPrice )----------------------------------

// function updateCarPrice (agencyId, carNum, newPrice) {
//     for (const agency of carMarket.sellers) {
//                 if (agency.agencyId === agencyId) {
//                     for (const car of agency.cars){
//                         for (const model of car.models){
//                             if (model.carNumber === carNum){
//                                 model.price = newPrice
//                                 return
//                             }}}}}
// }
// updateCarPrice("Plyq5M5AZ","LJTCs",1234)
// console.log(JSON.stringify(carMarket, null, 2))

// Calculate and return the total revenue for a specific agency (Method: getTotalAgencyRevenue )---------------

// function getTotalAgencyRevenue(agencyId) {
//     let totalRevenue = 0;

//     for (const agency of carMarket.sellers) {
//         if (agency.agencyId === agencyId) {
//             totalRevenue += agency.cash
//             totalRevenue += agency.credit
//             for (const car of agency.cars) {
//                 for (const model of car.models) {
//                     totalRevenue += model.price;
//                 }
//             }
//         }
//     }

//     return totalRevenue;
// }
// const result = getTotalAgencyRevenue("Plyq5M5AZ")
// console.log(result);

// Transfer a car from one agency to another (Method:  transferCarBetweenAgencies)---------------------------

// function transferCarBetweenAgencies(agencyToTransferFrom, agencyToTransferTo, carNumber) {
//     let sourceAgency = null;
//     let destinationAgency = null;
//     let carToTransfer = null;

//     for (const agency of carMarket.sellers) {
//         if (agency.agencyId === agencyToTransferFrom) {
//             sourceAgency = agency;
//             for (const car of agency.cars) {
//                 for (const model of car.models) {
//                     if (model.carNumber === carNumber) {
//                         carToTransfer = model;
//                     }
//                 }
//             }
//         } else if (agency.agencyId === agencyToTransferTo) {
//             destinationAgency = agency;
//         }
//     }
//     for (const car of sourceAgency.cars) {
//         const index = car.models.findIndex(model => model.carNumber === carNumber);
//             car.models.splice(index, 1);
//     }

//     carToTransfer.ownerId = agencyToTransferTo

//     destinationAgency.cars.push({
//         brand: carToTransfer.brand,
//         models: [carToTransfer],
//     });
// }

// transferCarBetweenAgencies('Plyq5M5AZ', '26_IPfHU1', 'O4_Jv');
// console.log(JSON.stringify(carMarket, null, 2));

// Search for a customer by their name or ID--------------------------------------------------------------------

// for (customer of carMarket.customers) {
//     if (customer.id === "BGzHhjnE8")
//     console.log('customer name:' + customer.name);
// }

// Retrieve all customers' names.-------------------------------------------------------------------------------

// for (customer of carMarket.customers) {
//     console.log('customer name:' + customer.name);
// }

// Change the cash of a customer---------------------------------------------------------------------- ---------

// for (customer of carMarket.customers) {
//     if (customer.id === "BGzHhjnE8") {
//         customer.cash += 700
//     }}
//     console.log(carMarket.customers);

// Calculate the total value of all cars owned by a specific customer (Method: getCustomerTotalCarValue ).-------

// function getCustomerTotalCarValue (customerId) {
//     let totalCarValue = 0
//     for (const customer of carMarket.customers) {
//         if (customer.id === customerId) {
//             for (const car of customer.cars) {
//                 totalCarValue += (car.price)
//             }
//             return ('the total car value of ' + customer.name + ' is ' + totalCarValue)
//         }
//     }
// }

// const result = getCustomerTotalCarValue("2RprZ1dbL")
// console.log(result);

// Retrieve all cars available for purchase-----------------------------------------------------------------------

// carList = []
// for (agency of carMarket.sellers) {
//     for (car of agency.cars) {
//         carList.push(car)
//     }
// }
// console.log(JSON.stringify(carList, null, 2));

// Search for cars based on certain criteria--------------------------------------------------------------------

// const carList = [];

// for (const agency of carMarket.sellers) {
//     for (const car of agency.cars) {
//         for (const model of car.models) {
//             if (model.year > 2008 && model.price < 200000) {
//                 carList.push(model);
//             }
//         }
//     }
// }

// console.log(JSON.stringify(carList, null, 2));

// Return the most expensive car available for sale (Method:  getMostExpensiveCar ).------------------------------

// let mostExpensive = null; 

// function findExpensive(carMarket) {
//   for (const agency of carMarket.sellers) {
//     for (const car of agency.cars) {
//       for (const model of car.models) {
//         if (mostExpensive === null || model.price > mostExpensive.price) {
//           mostExpensive = model;
//         }
//       }
//     }
//   }
//   return mostExpensive;
// }

// const exp = findExpensive(carMarket);
// console.log(exp);


// Return the cheapest car available for sale (Method:  getCheapestCar ----------------------------------------

// let cheapest = null; 

// function findCheap(carMarket) {
//   for (const agency of carMarket.sellers) {
//     for (const car of agency.cars) {
//       for (const model of car.models) {
//         if (cheapest === null || model.price < cheapest.price) {
//           cheapest = model;
//         }
//       }
//     }
//   }
//   return cheapest;
// }

// const exp = findCheap(carMarket);
// console.log(exp);

// Implement a  sellCar  function that sells a car to a specific customer------------------------------------

// function sellCar(agencyId, buyerId, carNum, taxPercent) {
//     let agency = null;
//     let customer = null;
//     let carToSell = null;
//     let carModelIndex = -1;

//     for (const seller of carMarket.sellers) {
//         if (seller.agencyId === agencyId) {
//             agency = seller;
//             break;
//         }
//     }

//     for (const buyer of carMarket.customers) {
//         if (buyer.id === buyerId) {
//             customer = buyer;
//             break;
//         }
//     }

//     if (agency !== null) {
//         for (const car of agency.cars) {
//             carModelIndex = car.models.findIndex(model => model.carNumber === carNum);
//             if (carModelIndex !== -1) {
//                 carToSell = car.models[carModelIndex];
//                 break;
//             }
//         }
//     }

//     if (agency === null || customer === null || carToSell === null) {
//         return "wrong id input";
//     }

//     const carPrice = carToSell.price;
//     const taxAmount = (carPrice * (taxPercent / 100));
//     const totalCost = carPrice + taxAmount;

//     if (customer.cash < totalCost) {
//         return "Customer does not have enough money";
//     }

//     agency.cash += carPrice;
//     customer.cash -= totalCost;

//     carToSell.ownerId = buyerId;
//     customer.cars.push(carToSell);
//     agency.cars[carModelIndex-1].models.splice(carModelIndex, 1);

//     carMarket.taxesAuthority.totalTaxesPaid += taxAmount;
//     carMarket.taxesAuthority.sumOfAllTransactions += totalCost;
//     carMarket.taxesAuthority.numberOfTransactions++;
// }

// sellCar("gNHjNFL12", "2RprZ1dbL", "kHE8f", 5);
// console.log(JSON.stringify(carMarket, null, 2));

// Calculate and return the total revenue of the entire market (Method:getTotalMarketRevenue)--------------------

// function getTotalMarketRevenue(carMarket) {
//     let totalRevenue = 0;

//     for (const agency of carMarket.sellers) {
//             totalRevenue += agency.cash
//             totalRevenue += agency.credit
//             for (const car of agency.cars) {
//                 for (const model of car.models) {
//                     totalRevenue += model.price;
//                 }
//             }
//         }
//         return totalRevenue;
//     }
    

// const result = getTotalMarketRevenue(carMarket)
// console.log(result);

    