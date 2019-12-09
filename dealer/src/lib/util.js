export const constructPayload = payload => {
  if (payload.Individual_Form_Type === "true") {
    return applicantPayload(payload);
  } else {
    return { ...applicantPayload(payload), ...jointApplicantPayload(payload) };
  }
};

function applicantPayload(payload) {
  return {
    sourcePartnerId: "QQQ",
    targetPlatforms: [
      {
        id: "PPP",
        partyId: "999999"
      }
    ],
    financeMethod: "Retail",
    applicant: {
      firstName: payload.FirstName,
      lastName: payload.LastName,
      phone: payload.Phone,
      otherPhone: null,
      ssn: payload.Ssn,
      dateOfBirth: payload.DateOfBirth,
      driversLicenseNumber: null,
      driversLicenseState: null,
      email: payload.Email,
      consentGiven: true,
      housingStatus: payload.Own,
      mortgageOrRentAmount: payload.Rent,
      monthsAtCurrentAddress: payload.Having_Two_years ? 24 : 12,
      address: {
        line1: payload.StreetAddress,
        city: payload.City,
        state: payload.State,
        postalCode: payload.Zipcode
      },
      monthsAtPreviousAddress: 12,
      previousAddress: {
        line1: payload.StreetAddress_P,
        city: payload.City_P,
        state: payload.State_P,
        postalCode: payload.Zipcode_P
      },
      income: payload.Money,
      incomeFrequency: payload.Tenure,
      otherMonthlyIncome: payload.Income,
      otherMonthlyIncomeSource: payload.Soure_Income,
      currentEmployment: {
        employerName: payload.Employer,
        totalMonthsEmployed: payload.Having_Two_years_Employment ? 24 : 12,
        occupation: payload.Occupation,
        workPhone: payload.WorkPhone,
        status: payload.Employment_Status
      },
      previousEmployment: {
        employerName: payload.Employer_P,
        occupation: payload.Occupation_P,
        workPhone: payload.WorkPhone_P,
        status: payload.Employment_Status_P
      }
    },
    financeSummary: {
      vehicleSellingPrice: 65083,
      salesTax: 264,
      governmentFees: 273,
      cashDown: 2509,
      rebate: 839,
      creditLifeIns: 658,
      term: 36,
      warranty: 362,
      gap: 427,
      accidentHealthIns: 428,
      frontEndFees: 218,
      msrp: 67083,
      estimatedPayment: 651,
      usedCarBook: "BlackBook",
      mileage: 50412,
      usedCarValue: 21694,
      otherFees: 484,
      wholesaleBookSource: "BlackBook",
      wholesaleCondition: "ExtraClean",
      wholesaleValueType: "Trade",
      wholesaleValue: 20194,
      netTrade: 10924
    },
    vehicle: {
      inventoryVehicleCondition: "Used",
      stockNumber: "174ZMWV4",
      vin: "gjhghjjhgj",
      chromeYear: payload.Year,
      chromeMake: payload.Make,
      chromeModel: payload.Model,
      chromeStyle: payload.Trim,
      otherYear: 2013,
      otherMake: "Honda",
      otherModel: "Civic Coupe",
      otherTrim: "2dr Man EX",
      certifiedUsed: false
    },
    tradeIns: [
      {
        chromeYear: 2011,
        chromeMake: "Fiat",
        chromeModel: "500",
        chromeStyle: "2dr HB Sport",
        otherYear: 2011,
        otherMake: "Fiat",
        otherModel: "500",
        otherTrim: "2dr HB Sport",
        monthlyPayment: 651,
        lienHolder: {
          name: "Capital One Auto Finance"
        }
      }
    ],
    communityPropertyDisclosureIndicator: true,
    prequalificationReferenceNumber: null,
    leadReferenceNumber: null,
    applicationReferenceNumber: null
  };
}

function jointApplicantPayload(payload) {
  return {
    coApplicant: {
      relationship: payload.Employee_Relationship,
      firstName: payload.FirstNameJ,
      lastName: payload.LastNameJ,
      suffix: "III",
      phone: payload.PhoneJ,
      otherPhone: "2146776599",
      ssn: payload.SsnJ,
      dateOfBirth: payload.DateOfBirthJ,
      driversLicenseNumber: null,
      driversLicenseState: null,
      email: payload.EmailJ,
      consentGiven: true,
      housingStatus: payload.OwnJ,
      mortgageOrRentAmount: payload.RentJ,
      monthsAtCurrentAddress: payload.Having_Two_years_Joint ? 24 : 12,
      address: {
        line1: payload.StreetAddressJ,
        city: payload.CityJ,
        state: payload.StateJ,
        postalCode: payload.ZipcodeJ
      },
      monthsAtPreviousAddress: 18,
      previousAddress: {
        line1: payload.StreetAddressJ_P,
        city: payload.CityJ_P,
        state: payload.StateJ_P,
        postalCode: payload.ZipcodeJ_P
      },
      income: payload.MoneyJ,
      incomeFrequency: payload.TenureJ,
      otherMonthlyIncome: payload.IncomeJoint,
      otherMonthlyIncomeSource: payload.Source_Income_Joint,
      currentEmployment: {
        employerName: payload.EmployerJ,
        totalMonthsEmployed: payload.Having_Two_years_EmploymentJ ? 24 : 12,
        occupation: payload.OccupationJ,
        workPhone: payload.WorkPhoneJ,
        status: payload.Employment_StatusJ,
        employerAddress: {
          line1: "984114 7qIsE9Zn Lo/z",
          line2: "qo",
          city: "bJnaS",
          state: "AZ",
          postalCode: "76486"
        }
      },
      previousEmployment: {
        employerName: payload.EmployerJ_P,
        totalMonthsEmployed: payload.Having_Two_years_EmploymentJ ? 24 : 12,
        occupation: payload.OccupationJ_P,
        workPhone: payload.WorkPhoneJ_P,
        status: payload.Employment_StatusJ_P,
        employerAddress: {
          line1: "689274 r2Q80zHGn920V0G0T",
          line2: "mJ",
          city: "gUwLla",
          state: "KS",
          postalCode: "32201"
        }
      }
    },
    lenderList: [
      {
        lenderId: "CF8",
        lenderName: "Lender Name"
      }
    ],
    partnerSource: "Source99",
    comments: "AppComment-TJHAV-BUIZI-RFEPT-25221",
    privacyNoticeIndicator: true,
    regulationBIndicator: true,
    extraData: [
      {
        name: "CTDXX01",
        value: "CustomValue-BRTRS493"
      },
      {
        name: "CTDXX02",
        value: "CustomValue-NRBIS987"
      },
      {
        name: "CTDXX03",
        value: "CustomValue-UIVVT870"
      },
      {
        name: "CTDXX04",
        value: "CustomValue-XLYYT968"
      },
      {
        name: "CTDXX05",
        value: "CustomValue-TQPWB885"
      },
      {
        name: "CTDXX06",
        value: "CustomValue-BILJD194"
      },
      {
        name: "CTDXX07",
        value: "CustomValue-GTZWY107"
      },
      {
        name: "CTDXX08",
        value: "CustomValue-YSYHI394"
      },
      {
        name: "CTDXX09",
        value: "CustomValue-FRJSW101"
      },
      {
        name: "CTDXX10",
        value: "CustomValue-IWYIY895"
      }
    ]
  };
}
