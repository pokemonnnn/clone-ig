const fs = require("fs");

const loadData = () => {
    const file = fs.readFileSync("data/data.json", "utf-8");
    const datas = JSON.parse(file);

    return datas;
};

const saveData = (datas) => {
    fs.writeFileSync("data/data.json", JSON.stringify(datas));
};

const addData = (data) => {
    const datas = loadData();
    datas.push(data);
    saveData(datas);
};

module.exports = {
    loadData,
    saveData,
    addData,
};
