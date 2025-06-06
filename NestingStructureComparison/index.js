Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) {
    return false;
  }
  if (this.length != other.length) {
    return false;
  }
  for (let i = 0; i < this.length; i++) {
    console.log(Array.isArray(this[i]));
    if (Array.isArray(this[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    } else {
      if (Array.isArray(other[i])) {
        return false;
      }
    }
  }
  return true;
};
