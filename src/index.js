
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  };
  return matrix.reduce((acc, item, key) => {
    acc = acc.concat(key % 2 !== 0 ? item.reverse() : item);
    return acc;
  }, []);
}
