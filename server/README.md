# Flask Server

> This project uses flask to server the Vue builds and provide backend APIs that can be called by the server

## Build Setup

1. Install Python 3.6.5 on your machine

2. Do the following
``` bash
# Open console and cd to ./projecRoot/server
# On windows run console as admin, for mac/linux you need sudo access
# Windows
py -3 -m pip install -r requirements.txt
# Mac/Linux
sudo python3 -m pip install -r requirements.txt

# Go to src folder
cd src

# Serve in debug mode
# Windows
py -3 server.py
# Mac/Linux
python3 server.py
```

3. Open Chrome/Firefox and browse to http://localhost:4000

> NOTE: You might want to install & enable CORS using a browser plugin. Just google CORS plugin and enable it if you want to do hot reloading of the GUI.
