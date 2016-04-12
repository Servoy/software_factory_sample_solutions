describe('test_hello_world', function() {
  it('should show say hello world', function() {
    var text, value, bool, source, url, title;
    var TestVars = {};
    browser.get("http://localhost:8083/solution1/solutions/solution1/index.html");
   	browser.wait(function() {
		 return browser.isElementPresent(element(by.xpath("//*[@data-svy-name='helloWorld.mylabel']")));
	}, 80000);
   	expect(element(by.buttonText('Click me to change the label below')).isPresent()).toBe(true);
   	var value = element(by.xpath("//*[@data-svy-name='helloWorld.mylabel']")).getText();
   	expect(value).toBe('Hello world?');
   	element(by.xpath("//*[@data-svy-name='helloWorld.mybutton']")).click();
    browser.waitForAngular();
    value = element(by.xpath("//*[@data-svy-name='helloWorld.mylabel']")).getText();
   	expect(value).toBe('Hello world!');
  });
});
