const parent = require("../data/Parent.json");
const child = require("../data/Child.json");

const getAllData = async (req, res) => {
  const resData = parent.data.map((item) => {
    let paidAmount = child.data
      .filter((cItem) => cItem.parentId === item.id)
      .reduce(function (pv, cv) {
        return pv + cv.paidAmount;
      }, 0);
    return {
      ...item,
      paidAmount,
    };
  });
  res.json(resData);
};

const getChildrenData = async (req, res) => {
  const resData = child.data.filter((item) => {
    return item.id == req.params.id
  });
  res.json(resData);
}

module.exports = { getAllData, getChildrenData };
