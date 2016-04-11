
/**
 * @properties={typeid:24,uuid:"ED51A0C3-4C97-4CC1-9A62-9722AC9DB8F8"}
 */
function testIPAddressRegEx1() {
	jsunit.assertTrue(scopes.globals.isIpAddressValid("192.168.1.1"));
}

/**
 * @properties={typeid:24,uuid:"3548BA6B-4E7C-452E-84D2-11BD6F56DA37"}
 */
function testIPAddressRegEx2() {
	jsunit.assertFalse(scopes.globals.isIpAddressValid("230.168.1.590"));
}

/**
 * @properties={typeid:24,uuid:"B9F2A756-AAA8-4913-B0A5-4D75257BBC6F"}
 */
function testIPAddressRegEx3() {
	jsunit.assertFalse(scopes.globals.isIpAddressValid("DeMo"));
}

/**
 * @properties={typeid:24,uuid:"CF3F5986-8C23-4625-9671-06CB5C311D66"}
 */
function testIPAddressRegEx4() {
	jsunit.assertTrue(scopes.globals.isIpAddressValid("127.0.0.1"));
}

/**
 * @properties={typeid:24,uuid:"EAC6652F-32AC-4037-88B6-6FAD98F6F7D6"}
 */
function testIPAddressRegEx5() {
	jsunit.assertFalse(scopes.globals.isIpAddressValid("399.168.255.1"));
}

/**
 * @properties={typeid:24,uuid:"0DE7A844-7C31-4D76-81B1-EDE80EA4E3E9"}
 */
function testIPAddressRegEx6() {
	jsunit.assertFalse(scopes.globals.isIpAddressValid(".168.1.1"));
}

/**
 * @properties={typeid:24,uuid:"0A4E601C-6E81-4379-85E4-43C578905557"}
 */
function testIPAddressRegEx7() {
	jsunit.assertFalse(scopes.globals.isIpAddressValid("192...1"));
}

/**
 * @properties={typeid:24,uuid:"13CF005C-4567-40C2-993E-3642845D8697"}
 */
function testIPAddressRegEx8() {
	jsunit.assertFalse(scopes.globals.isIpAddressValid("230.168.543.100"));
}
