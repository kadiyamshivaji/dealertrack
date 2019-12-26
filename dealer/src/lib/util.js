import moment from "moment";

export const constructPayload = payload => {
  if (!payload.IsCoApplicantFormEnable) {
    return applicant(payload);
  } else {
    return { ...applicant(payload), ...coApplicant(payload) };
  }
};

function applicant(payload) {
  const current = currentApplicant(payload);
  if (payload.Having_Two_years) {
    current.applicant = { ...current.applicant, ...previousAddress(payload) };
  }
  if (payload.Having_Two_years_Employment) {
    current.applicant = {
      ...current.applicant,
      ...previousEmployment(payload)
    };
  }
  return current;
}

function coApplicant(payload) {
  const joint = jointApplicant(payload);
  if (payload.Having_Two_years_Joint) {
    joint.coApplicant = { ...joint.coApplicant, ...coPreviousAddress(payload) };
  }
  if (payload.Having_Two_years_Employment_Co) {
    joint.coApplicant = {
      ...joint.coApplicant,
      ...coPreviousEmployment(payload)
    };
  }
  return joint;
}

function removeSpecialChar(str) {
  if (str) {
    return str.replace(/[^a-zA-Z0-9 ]/g, "").replace(" ", "");
  }
}

function currentApplicant(payload) {
  return {
    sourcePartnerId: "MMD",
    targetPlatforms: [
      {
        id: "DTC",
        partyId: "100025"
      }
    ],
    financeMethod: "Retail",
    applicant: {
      firstName: payload.FirstName,
      lastName: payload.LastName,
      phone: removeSpecialChar(payload.Phone),
      otherPhone: null,
      ssn: removeSpecialChar(payload.Ssn),
      dateOfBirth: moment(payload.DateOfBirth).format("YYYY-MM-DD"),
      driversLicenseNumber: null,
      driversLicenseState: null,
      email: payload.Email,
      consentGiven: true,
      housingStatus: payload.Own,
      mortgageOrRentAmount: payload.Rent,
      monthsAtCurrentAddress: !payload.Having_Two_years ? 24 : 12,
      address: {
        line1: payload.StreetAddress,
        city: payload.City,
        state: payload.State,
        postalCode: payload.Zipcode
      },
      monthsAtPreviousAddress: 12,

      income: payload.Money,
      incomeFrequency: "Monthly",
      otherMonthlyIncome: payload.Income0 || null,
      otherMonthlyIncomeSource: payload.Source0 || null,
      currentEmployment: {
        employerName: payload.Employer,
        totalMonthsEmployed: !payload.Having_Two_years_Employment ? 24 : 12,
        occupation: payload.Occupation,
        workPhone: removeSpecialChar(payload.WorkPhone),
        status: payload.Employment_Status
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
      vin: "WBA4J7C53KBM75242",
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
    prequalificationReferenceNumber: null,
    leadReferenceNumber: null,
    applicationReferenceNumber: null
  };
}

function previousAddress(payload) {
  return {
    previousAddress: {
      line1: payload.StreetAddress_P,
      line2: payload.SuitNo_P,
      city: payload.City_P,
      state: payload.State_P,
      postalCode: payload.Zipcode_P
    }
  };
}
function previousEmployment(payload) {
  return {
    previousEmployment: {
      employerName: payload.Employer_P,
      occupation: payload.Occupation_P,
      workPhone: removeSpecialChar(payload.WorkPhone_P),
      status: payload.Employment_Status_P
    }
  };
}

function jointApplicant(payload) {
  return {
    coApplicant: {
      relationship: payload.Employee_Relationship,
      firstName: payload.FirstName_Co,
      lastName: payload.LastName_Co,
      suffix: "III",
      phone: removeSpecialChar(payload.Phone_Co),
      otherPhone: "2146776599",
      ssn: removeSpecialChar(payload.Ssn_Co),
      dateOfBirth: moment(payload.DateOfBirth_Co).format("YYYY-MM-DD"),
      driversLicenseNumber: null,
      driversLicenseState: null,
      email: payload.Email_Co,
      consentGiven: true,
      housingStatus: payload.Own_Co,
      mortgageOrRentAmount: payload.Rent_Co,
      monthsAtCurrentAddress: !payload.Having_Two_years_Joint ? 24 : 12,
      address: {
        line1: payload.StreetAddress_Co,
        city: payload.City_Co,
        state: payload.State_Co,
        postalCode: payload.Zipcode_Co
      },
      monthsAtPreviousAddress: 18,

      income: payload.Money_Co,
      incomeFrequency: "Monthly",
      otherMonthlyIncome: payload.IncomeJoint || null,
      otherMonthlyIncomeSource: payload.Source_Income_Joint || null,
      currentEmployment: {
        employerName: payload.Employer_Co,
        totalMonthsEmployed: !payload.Having_Two_years_Employment_Co ? 24 : 12,
        occupation: payload.Occupation_Co,
        workPhone: removeSpecialChar(payload.WorkPhone_Co),
        status: payload.Employment_Status_Co,
        employerAddress: {
          line1: "984114 7qIsE9Zn Lo/z",
          line2: "qo",
          city: "bJnaS",
          state: "AZ",
          postalCode: "76486"
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

function coPreviousEmployment(payload) {
  return {
    previousEmployment: {
      employerName: payload.Employer_Co_P,
      totalMonthsEmployed: !payload.Having_Two_years_Employment_Co ? 24 : 12,
      occupation: payload.Occupation_Co_P,
      workPhone: removeSpecialChar(payload.WorkPhone_Co_P),
      status: payload.Employment_Status_Co_P,
      employerAddress: {
        line1: "689274 r2Q80zHGn920V0G0T",
        line2: "mJ",
        city: "gUwLla",
        state: "KS",
        postalCode: "32201"
      }
    }
  };
}

function coPreviousAddress(payload) {
  return {
    previousAddress: {
      line1: payload.StreetAddress_Co_P,
      line2: payload.SuitNo_Co_P,
      city: payload.City_Co_P,
      state: payload.State_Co_P,
      postalCode: payload.Zipcode_Co_P
    }
  };
}
