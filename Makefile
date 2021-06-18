check:
	yarn check

dev:
	docker-compose up api

lint:
	yarn lint

test:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml run api yarn test --watchAll

ci: lint test

.PHONY: lint dev test check
