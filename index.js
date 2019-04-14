const { Calcule } = require("./firstClass/function.first.class");
const { AuditingParent } = require("./higherOrder/function.higher.order");
const { FunctionMap } = require('./map/map')
const { pai, filho, neto, bisneto, tataraneto } = require("./common/constants");

const main = async () => {
  Calcule();
  AuditingParent(pai, filho, neto, bisneto, tataraneto);
  FunctionMap();
};

main();
