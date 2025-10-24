export class CreateArkUserDto {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    country: string;
    mobile: string;
    email: string;
}

const Apk_Real_office_id = 37827;

export const CreateArkUserDefaultData = {
    "accountID": -1,
    "accountMirroringAccountIds": [],
    "accountMirroringPolicyId": -1,
    "address": "",
    "currencySign": "",
    "accountIdPrefix": "",
    "clientPriceExecution": false,
    "canTransferMoney": false,
    "canTransferPosition": false,
    "currenciesPolicyID": 1,
    "forceChangePassword": false,
    "genericPolicyID": 1,
    "ignoreLiquidation": false,
    "isAllowMultiSession": false,
    "isDemo": false,
    "isLocked": false,
    "parentId": Apk_Real_office_id,
    // "secondPassword": "",
    // "investorPassword": "",
    "percentageLevel1": 100.0,
    "percentageLevel2": 100.0,
    "percentageLevel3": 100.0,
    "percentageLevel4": 100.0,
    "creditLoanPercentage": 0.0,
    "roboDealerPolicyId": -1,
    "telephonePass": "",
    "tradingType": 1,
    "userCurrencyId": 1,
    "userType": 1,
    "validateMoneyBeforeClose": false,
    "validateMoneyBeforeEntry": true,
    "closeOnly": false,
    "openOnly": false,
    "noSellAtLoss": false,
    "enableCashDelivery": false,
    "enableDepositRequest": false,
    "canCreateOrUpdateEntryOrder": true,
    "sendCredentialsEmailToUser": true,
    "blockFrequentTradesSeconds": 100,
    "isVerified": true,
    "ignoreBlockTradeIfInLoss": false,
    "userWhiteListIps": [],
    "enableApi": false,
    "chargeMarginForEntry": false,
    "assignAgentToMySelf": false
}