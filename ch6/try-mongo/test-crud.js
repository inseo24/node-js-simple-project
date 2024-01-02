const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://{id}:{password}@{cluster}?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true });

async function main() {
    try {
        await client.connect();
        
        console.log("MongoDB 연결 성공");

        const collection = client.db("test").collection("person");
        await collection.insertOne({ name: "seoin", age: 27 });
        console.log("데이터 추가 성공");

        const documents = await collection.find({ name: "seoin" }).toArray();
        console.log('찾은 문서: ', documents);

        await collection.updateOne({ name: "seoin" }, { $set: { age: 28 } });
        console.log("데이터 수정 성공");

        const updatedDocuments = await collection.find({ name: "seoin" }).toArray();
        console.log('수정된 문서: ', updatedDocuments);

        await collection.deleteOne({ name: "seoin" });
        console.log("데이터 삭제 성공");

        await client.close();
    } catch (err) {
        console.error(err);
    }   
}

main();