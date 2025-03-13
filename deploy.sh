#!/bin/bash

# Build frontend
echo "Building frontend..."
npm run build

# Create deployment directory if it doesn't exist
mkdir -p deployment

# Copy build files to deployment directory
cp -r dist/* deployment/

echo "Frontend build completed!"
