const emailEntities = [
    {
        type: "email",
        emailAddress: "priyanshu@gmail.com",
        provider: "outlook",
        inboxCount: 2,
        sentCount: 3,
        spamCount: 6.5
    },
    {
        type: "email",
        emailAddress: "suhalka@yahoo.com",
        provider: "outlook",
        inboxCount: 20,
        sentCount: 10,
        spamCount: 5.5
    }
];

function calculateEmailCarbonFootprint(emailEntity) {
    const inboxFootprint = emailEntity.inboxCount * 0.004; 
    const spamFootprint = emailEntity.spamCount * 0.0003; 
    const sentFootprint = emailEntity.sentCount * 0.05;   

    const totalFootprint = inboxFootprint + spamFootprint + sentFootprint;

    return {
        email: emailEntity.emailAddress,
        provider: emailEntity.provider,
        inboxFootprint: `${inboxFootprint.toFixed(4)} KG CO2`,
        sentFootprint: `${sentFootprint.toFixed(4)} KG CO2`,
        spamFootprint: `${spamFootprint.toFixed(4)} KG CO2`,
        totalFootprint: `${totalFootprint.toFixed(4)} KG CO2`
    };
}

function calculateCarbonFootprint(entityType, entity) {
    if (entityType === "email") {
        return calculateEmailCarbonFootprint(entity);
    } else {
        return "No data available for this entity type.";
    }
}

emailEntities.forEach(entity => {
    const result = calculateCarbonFootprint(entity.type, entity);
    console.log(result);
});