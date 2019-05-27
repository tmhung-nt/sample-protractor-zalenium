let jsonFilePath;

class JsonHelper{
    static createJsonPath(path){
        jsonFilePath = path;
    }

    static readJsonData(keyValue){
        const fs = require('fs');

        let rawData = fs.readFileSync(jsonFilePath);
        let result = JSON.parse(rawData);
        let index = 1;
        return result['data'][parseInt(index)-1][keyValue]
    }
}
module.exports = JsonHelper;