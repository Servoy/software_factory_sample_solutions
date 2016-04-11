describe('test_hello_world', function() {
  it('should show say hello world', function() {
    var text, value, bool, source, url, title;
    var TestVars = {};
    browser.get("http://localhost:8083/hello/solutions/hello/index.html");
   	browser.wait(function() {
		 return browser.isElementPresent(element(by.xpath("//*[@data-svy-name='world.mylabel']")));
	}, 80000);
   	expect(element(by.buttonText('hello')).isPresent()).toBe(true);
   	var value = element(by.xpath("//*[@data-svy-name='world.mylabel']")).getText();
   	expect(value).toBe('world');
   	element(by.xpath("//*[@data-svy-name='world.mybutton']")).click();
    browser.waitForAngular();
    value = element(by.xpath("//*[@data-svy-name='world.mylabel']")).getText();
   	expect(value).toBe('world!');
  });
});
