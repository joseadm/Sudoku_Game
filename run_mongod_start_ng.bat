start cmd /k mongod -dbpath c:\data\
cd api
start cmd /k npm start
cd ..\client
start cmd /k ng serve