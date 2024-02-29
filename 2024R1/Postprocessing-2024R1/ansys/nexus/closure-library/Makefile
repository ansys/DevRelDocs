default: test

test:
	./node_modules/.bin/closure-library-phantomjs all_tests.html

TEST_APP := "Google Chrome"
browsertest:
	./lib/serve_all_tests --auto --app $(TEST_APP) --port 26874

# TODO(gregp):
# update:
# 	git checkout upstream
# 	git pull
# 	git checkout master
# 	git merge upstream
# TODO(gregp): parse upstream MOE_MIGRATED_REVID into version, tag, publish

publish:
	[ "`git rev-parse --abbrev-ref HEAD`" == "master" ]
	npm publish

.PHONY: default test browsertest publish
