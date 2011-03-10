TEST_TARGETS=$(shell find test/ -name 'test.*')

doc:
	$(MAKE) -C doc/ html

test: 
	NODE_ENV=test expresso -I lib -s $(TEST_TARGETS)

clean:
	@rm -r lib-cov

.PHONY: test doc