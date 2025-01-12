# Load environment variables from .env file
include .env

run:
		@echo "Running the Go application..."
		go run handler.go

test:
		@echo "Running tests..."
		go test ./...

build:
		@echo "Building the Go application..."
		rm -f handler
		GOOS=linux GOARCH=amd64 go build -o handler handler.go
		@echo "Successfully Build the Go application!"

clean:
		@echo "Cleaning up..."
		rm -f handler