install:
	go mod download
	npm install

build:
	go build -o bin/app ./src/go
	npm run build

run:
	go run src/go/main.go

run-ts:
	npm run dev

test:
	go test ./tests/
	npm test

clean:
	go clean
	rm -rf dist/
	rm -rf bin/