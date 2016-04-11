
/**
 * @properties={typeid:24,uuid:"8BF81FB4-97AE-45B1-B4CF-345918719020"}
 */
function test1() {
	jsunit.assertEquals("Math check", add(1, 1), 2);
}

/**
 * Add b to a and return the result.
 * 
 * @param a first value to add to.
 * @param b second value to be added.
 *
 * @properties={typeid:24,uuid:"5C68E2C6-AC15-410E-AEC7-667752979861"}
 */
function add(a, b)
{
	return a + b;
}

/**
 * @properties={typeid:24,uuid:"101A76E0-DFE0-46AE-B51D-D35E4794CE77"}
 */
function test2() {
	jsunit.assertNotNull("Reported solution name should never be null", application.getSolutionName());
	
	jsunit.assertEquals("ab", add("a", "b"));
}
