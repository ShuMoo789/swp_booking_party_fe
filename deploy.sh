echo "Building app..."
npm run build
echo "Deploy files to server..."
scp -r dist/* root@206.189.88.124:/var/www/html/
echo "Done!"