export const normalTime = (time)=> {
	var oDate =  new Date();

	oDate.setTime(time);

	var y = oDate.getFullYear();
	var m = oDate.getMonth() + 1;
	var d = oDate.getDate();

	return y + ' str ' + m;
}