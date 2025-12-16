#!/bin/bash

echo "🚀 Starting BluePrint Series..."
echo ""

# Start backend
echo "Starting backend on port 3001..."
cd backend
npm install > /dev/null 2>&1
node server.js &
BACKEND_PID=$!
cd ..

# Wait for backend
sleep 2

# Start frontend
echo "Starting frontend on port 3000..."
cd frontend
npm install > /dev/null 2>&1
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ Services started!"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:3001"
echo ""
echo "   Events:"
echo "   - http://localhost:3000/event/rich-tu"
echo "   - http://localhost:3000/event/maya-johnson"
echo ""
echo "Press Ctrl+C to stop all services"

# Wait and cleanup
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" EXIT
wait
