/**
 * @properties={typeid:35,uuid:"C7DDD728-EEFE-4F12-98FA-C3C0CF019D6F",variableType:-4}
 */
 var ipValidatingRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
// ^$ not used? (add them at the beginning and end of the regex. to make tests pass)

/**
 * Checks if an IP Address is correctly formatted.
 * 
 * @param {String} ipAddress the address to check
 * @return {Boolean} true if valid format, false otherwise.
 * 
 * @properties={typeid:24,uuid:"4FA39290-68E0-4846-BFF2-03E262980BBE"}
 */
function isIpAddressValid(ipAddress) {
	if (typeof ipAddress == 'undefined' || ipAddress == null) return false;
	return ipValidatingRegex.test(ipAddress);
}
