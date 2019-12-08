export const constructPayload=(payload)=>{
    if(payload.Form_Type==='true'){
        return applicantPayload(payload);
    }else{
        return jointPayload(payload);
    }
}

function applicantPayload(payload){
    return {
        "sourcePartnerId": "QQQ",
        "targetPlatforms": [
          {
            "id": "PPP",
            "partyId": "999999"
          }
        ],
        "financeMethod": "Retail",
        "applicant": {
          "firstName":payload.FirstName,
          "lastName": payload.LastName,
          "phone": payload.Phone,
          "otherPhone": null, 
          "ssn": payload.Ssn,
          "dateOfBirth": payload.Datepicker,
          "driversLicenseNumber": null,
          "driversLicenseState": null,
          "email":payload.Email,
          "consentGiven": true,
          "housingStatus": payload.Own,
          "mortgageOrRentAmount": payload.Rent,
          "monthsAtCurrentAddress": payload.Having_Two_years?24:12,
          "address": {
            "line1":payload.StreetAddress,
            "city": payload.City,
            "state": payload.State,
            "postalCode": payload.Zipcode
          },
          "monthsAtPreviousAddress": 12,
          "previousAddress": {
            "line1":payload.StreetAddress_P,
            "line2": null,
            "city": payload.City_P,
            "state": payload.State_P,
            "postalCode":payload.Zipcode_P
          },
          "income": 48460,
          "incomeFrequency": "Annually",
          "otherMonthlyIncome": 238,
          "otherMonthlyIncomeSource": "Stock Dividends",
          "currentEmployment": {
            "employerName": "Chevron",
            "totalMonthsEmployed": 183,
            "occupation": "Auto Technician",
            "workPhone": "5309064669",
            "status": "Employed"
          },
          "previousEmployment": {
            "employerName": "ExxonMobil",
            "totalMonthsEmployed": 196,
            "occupation": "Quality Control",
            "workPhone": "9082814451",
            "status": "Employed"
          }
        },
        "financeSummary": {
          "vehicleSellingPrice": 65083,
          "salesTax": 264,
          "governmentFees": 273,
          "cashDown": 2509,
          "rebate": 839,
          "creditLifeIns": 658,
          "term": 36,
          "warranty": 362,
          "gap": 427,
          "accidentHealthIns": 428,
          "frontEndFees": 218,
          "msrp": 67083,
          "estimatedPayment": 651,
          "usedCarBook": "BlackBook",
          "mileage": 50412,
          "usedCarValue": 21694,
          "otherFees": 484,
          "wholesaleBookSource": "BlackBook",
          "wholesaleCondition": "ExtraClean",
          "wholesaleValueType": "Trade",
          "wholesaleValue": 20194,
          "netTrade": 10924
        },
        "vehicle": {
          "inventoryVehicleCondition": "Used",
          "stockNumber": "174ZMWV4",
          "vin": "gjhghjjhgj",
          "chromeYear": 2013,
          "chromeMake": "Honda",
          "chromeModel": "Civic Coupe",
          "chromeStyle": "2dr Man EX",
          "otherYear": 2013,
          "otherMake": "Honda",
          "otherModel": "Civic Coupe",
          "otherTrim": "2dr Man EX",
          "certifiedUsed": false
        },
        "tradeIns": [
          {
            "chromeYear": 2011,
            "chromeMake": "Fiat",
            "chromeModel": "500",
            "chromeStyle": "2dr HB Sport",
            "otherYear": 2011,
            "otherMake": "Fiat",
            "otherModel": "500",
            "otherTrim": "2dr HB Sport",
            "monthlyPayment": 651,
            "lienHolder": {
              "name": "Capital One Auto Finance"
            }
          }
        ],
        "communityPropertyDisclosureIndicator": true,
        "prequalificationReferenceNumber": null,
        "leadReferenceNumber": null,
        "applicationReferenceNumber": null
      }
}

function jointPayload(payload){
    return {
        "sourcePartnerId": "QQQ",
        "targetPlatforms": [
          {
            "id": "PPP",
            "partyId": "999999"
          }
        ],
        "financeMethod": "Retail",
        "applicant": {
          "firstName": "Merlin",
          "lastName": "Testco",
          "suffix": "III",
          "phone": "5307754463",
          "otherPhone": "5305036256",
          "ssn": "555497526",
          "dateOfBirth": "1966-07-31",
          "driversLicenseNumber": "7720XRTKZQZW473",
          "driversLicenseState": "AK",
          "email": "merlintestco@subdomain.email.com",
          "consentGiven": true,
          "housingStatus": "Military",
          "mortgageOrRentAmount": 2284,
          "monthsAtCurrentAddress": 102,
          "address": {
            "line1": "6634 Capella Lane",
            "city": "Lancaster",
            "state": "CA",
            "postalCode": "93536"
          },
          "monthsAtPreviousAddress": 18,
          "previousAddress": {
            "line1": "1202 Munson Drive",
            "city": "Austin",
            "state": "TX",
            "postalCode": "78758"
          },
          "income": 5836,
          "incomeFrequency": "BiWeekly",
          "otherMonthlyIncome": 227,
          "otherMonthlyIncomeSource": "Pension",
          "currentEmployment": {
            "employerName": "U.S. Department of Defense",
            "totalMonthsEmployed": 98,
            "occupation": "Food Services Manager",
            "workPhone": "5309954457",
            "status": "Employed",
            "employerAddress": {
              "line1": "178451 CXPH",
              "line2": "wsyRKsVUxl",
              "city": "cyCk.ZZnW",
              "state": "AL",
              "postalCode": "72822"
            }
          },
          "previousEmployment": {
            "employerName": "Johnson & Johnson",
            "totalMonthsEmployed": 71,
            "occupation": "Auto Technician",
            "workPhone": "2143036315",
            "status": "Employed",
            "employerAddress": {
              "line1": "879434 kwevWRy7D dC",
              "line2": "tpDnG/w",
              "city": "rEmZEMMYDjvd.H",
              "state": "WY",
              "postalCode": "81693"
            }
          }
        },
        "coApplicant": {
          "relationship": "Spouse",
          "firstName": "Maxwell",
          "lastName": "Testco",
          "suffix": "III",
          "phone": "2145386956",
          "otherPhone": "2146776599",
          "ssn": "555474533",
          "dateOfBirth": "1950-10-20",
          "driversLicenseNumber": "8085TLBADRPF359",
          "driversLicenseState": "TX",
          "email": "maxwelltestco@email.museum",
          "consentGiven": true,
          "housingStatus": "Family",
          "mortgageOrRentAmount": 2692,
          "monthsAtCurrentAddress": 75,
          "address": {
            "line1": "1202 Munson Drive",
            "city": "Austin",
            "state": "TX",
            "postalCode": "78758"
          },
          "monthsAtPreviousAddress": 18,
          "previousAddress": {
            "line1": "1202 Munson Drive",
            "city": "Austin",
            "state": "TX",
            "postalCode": "78758"
          },
          "income": 147628,
          "incomeFrequency": "Annually",
          "otherMonthlyIncome": 132,
          "otherMonthlyIncomeSource": "Child Support",
          "currentEmployment": {
            "employerName": "McDonalds",
            "totalMonthsEmployed": 35,
            "occupation": "Accountant",
            "workPhone": "5303626825",
            "status": "Employed",
            "employerAddress": {
              "line1": "984114 7qIsE9Zn Lo/z",
              "line2": "qo",
              "city": "bJnaS",
              "state": "AZ",
              "postalCode": "76486"
            }
          },
          "previousEmployment": {
            "employerName": "ExxonMobil",
            "totalMonthsEmployed": 81,
            "occupation": "Quality Control",
            "workPhone": "2146966045",
            "status": "Employed",
            "employerAddress": {
              "line1": "689274 r2Q80zHGn920V0G0T",
              "line2": "mJ",
              "city": "gUwLla",
              "state": "KS",
              "postalCode": "32201"
            }
          }
        },
        "financeSummary": {
          "vehicleSellingPrice": 73880,
          "salesTax": 810,
          "governmentFees": 52,
          "cashDown": 3640,
          "rebate": 1872,
          "creditLifeIns": 345,
          "term": 69,
          "invoiceAmount": 74880,
          "warranty": 650,
          "gap": 336,
          "accidentHealthIns": 378,
          "frontEndFees": 553,
          "msrp": 75880,
          "estimatedPayment": 739,
          "mileage": 26,
          "otherFees": 590,
          "netTrade": 7234
        },
        "vehicle": {
          "inventoryVehicleCondition": "New",
          "vin": "1M8SII9OKKE783397",
          "stockNumber": "sPmEp878uvomj",
          "chromeYear": 2015,
          "chromeMake": "Infiniti",
          "chromeModel": "FX50",
          "chromeStyle": "AWD 4dr",
          "otherYear": 2015,
          "otherMake": "Infiniti",
          "otherModel": "FX50",
          "otherTrim": "AWD 4dr"
        },
        "tradeIns": [
          {
            "chromeYear": 1971,
            "chromeMake": "9IO/094CMjx9QV,U*duLz",
            "chromeModel": "9fKg6fqkDhpqvkhZRjXMS62uQX",
            "chromeStyle": "UJtZ",
            "otherYear": 1971,
            "otherMake": "9IO/094CMjx9QV,U*duLz",
            "otherModel": "9fKg6fqkDhpqvkhZRjXMS62uQX",
            "otherTrim": "UJtZ",
            "monthlyPayment": 739,
            "lienHolder": {
              "name": "Wachovia Dealer Services"
            }
          }
        ],
        "lenderList": [
          {
            "lenderId": "CF8",
            "lenderName": "Lender Name"
          }
        ],
        "partnerSource": "Source99",
        "comments": "AppComment-TJHAV-BUIZI-RFEPT-25221",
        "privacyNoticeIndicator": true,
        "regulationBIndicator": true,
        "extraData": [
          {
            "name": "CTDXX01",
            "value": "CustomValue-BRTRS493"
          },
          {
            "name": "CTDXX02",
            "value": "CustomValue-NRBIS987"
          },
          {
            "name": "CTDXX03",
            "value": "CustomValue-UIVVT870"
          },
          {
            "name": "CTDXX04",
            "value": "CustomValue-XLYYT968"
          },
          {
            "name": "CTDXX05",
            "value": "CustomValue-TQPWB885"
          },
          {
            "name": "CTDXX06",
            "value": "CustomValue-BILJD194"
          },
          {
            "name": "CTDXX07",
            "value": "CustomValue-GTZWY107"
          },
          {
            "name": "CTDXX08",
            "value": "CustomValue-YSYHI394"
          },
          {
            "name": "CTDXX09",
            "value": "CustomValue-FRJSW101"
          },
          {
            "name": "CTDXX10",
            "value": "CustomValue-IWYIY895"
          }
        ],
        "prequalificationReferenceNumber": null,
        "leadReferenceNumber": null,
        "applicationReferenceNumber": null
      }
}