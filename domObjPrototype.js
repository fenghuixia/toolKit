/**
*  dom对象扩展util js
*  @author zwl
**/

/** Array 扩展**/
Array.prototype.contains = function (elem) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == elem) {
			return true;
		}
	}
	return false;
}

/**
 * 删除数据的某一值 返回idnex
 */
Array.prototype.removeValue = function (value) {
	var index = -1;
	for (var i = 0; i < this.length; i++) {
		if (this[i] == value) {
			this.splice(i,1);
			index = i;
		}
	}
	return index;
}