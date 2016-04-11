/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1C69DF1D-9596-4FA7-B91A-418722E4F1F3"}
 */
var validationResult = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8D64511D-F37E-41B6-AC09-4D1516DAC7C1"}
 */
var ipAddress = "";

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95287088-7DCD-4534-8A6C-29D35A07DFD1",variableType:4}
 */
var ii = 1;


/**
 * Checks the address entered by the user to be correctly formatted as an IP Address.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"874D7DF3-B38F-4CD5-BAA5-4C7F8506FB60"}
 */
function checkAddress(event) {
	// for debugging in browsers (with 'break on throw/exceptions ...') uncomment the following line
//	try { throw ""; } catch (e) {}
//	plugins.dialogs.showQuestionDialog("Button clicked","Action handler called.");
	if (scopes.globals.isIpAddressValid(ipAddress))
	{
		validationResult = "Correctly formatted IPv4 address... Attempt: " + (ii++);
	}
	else
	{
		validationResult = "Not an IPv4 address. Attempt: " + (ii++);
	}
}
