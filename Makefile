
test: 
	NODE_ENV=test expresso -I lib -s test/test.*.js

clean:
	@rm -r lib-cov

.PHONY: test