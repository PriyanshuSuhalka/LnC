const emailAccounts = [
    {
        accountType: "email",
        address: "priyanshu@gmail.com",
        emailProvider: "outlook",
        inboxMessages: 2,
        sentMessages: 3,
        spamMessages: 6.5
    },
    {
        accountType: "email",
        address: "suhalka@yahoo.com",
        emailProvider: "outlook",
        inboxMessages: 20,
        sentMessages: 10,
        spamMessages: 5.5
    }
];

function calculateCarbonFootprintForEmail(emailAccount) {
    const inboxEmission = emailAccount.inboxMessages * 0.004; 
    const spamEmission = emailAccount.spamMessages * 0.0003; 
    const sentEmission = emailAccount.sentMessages * 0.05;   

    const totalEmission = inboxEmission + spamEmission + sentEmission;

    return {
        emailAddress: emailAccount.address,
        emailProvider: emailAccount.emailProvider,
        inboxEmission: `${inboxEmission.toFixed(4)} KG CO2`,
        sentEmission: `${sentEmission.toFixed(4)} KG CO2`,
        spamEmission: `${spamEmission.toFixed(4)} KG CO2`,
        totalEmission: `${totalEmission.toFixed(4)} KG CO2`
    };
}

function calculateCarbonFootprintByType(accountType, accountData) {
    if (accountType === "email") {
        return calculateCarbonFootprintForEmail(accountData);
    } else {
        return "No data available for this account type.";
    }
}

emailAccounts.forEach(account => {
    const emissionReport = calculateCarbonFootprintByType(account.accountType, account);
    console.log(emissionReport);
});
