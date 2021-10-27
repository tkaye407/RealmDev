exports = async function(changeEvent) {
  const collection = context.services.get("mongodb-atlas").db("Sync").collection("Person");
  const doc = await collection.insertOne({ 
    firstName: changeEvent.fullDocument.firstName,
    lastName: changeEvent.fullDocument.lastName,
    partition: changeEvent.fullDocument.partition,
    age: changeEvent.fullDocument.age,
  });
};
