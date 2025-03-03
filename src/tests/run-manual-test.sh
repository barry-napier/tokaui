#!/bin/bash

# Start the Next.js development server in the background
echo "Starting Next.js development server..."
npm run dev &
SERVER_PID=$!

# Wait for the server to start
echo "Waiting for server to start..."
sleep 10

# Run the manual test
echo "Running manual test..."
npm run test:manual

# Capture the test result
TEST_RESULT=$?

# Kill the server
echo "Stopping server..."
kill $SERVER_PID

# Exit with the test result
exit $TEST_RESULT 