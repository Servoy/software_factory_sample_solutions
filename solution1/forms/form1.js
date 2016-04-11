/**
 * @properties={typeid:24,uuid:"02E62448-210E-42E4-8B3C-A79BE74668BF"}
 */
function test1() {
	a();
}

/**
 * @properties={typeid:24,uuid:"0157F0F0-6D64-4740-AAF9-582CA64A2662"}
 */
function test2() {
	b();
}

/**
 * @properties={typeid:24,uuid:"354C9C36-FFA9-4BEA-B583-FC1E124CD85A"}
 */
function b()
{
	jsunit.assertFalse("Boolean can be changed if you want the tests to fail on purpose", false);
}

/**
 * @properties={typeid:24,uuid:"1C567E66-2C39-4B96-80DE-378EB1FA2B89"}
 */
function a()
{
	scopes.scope2.c();
}