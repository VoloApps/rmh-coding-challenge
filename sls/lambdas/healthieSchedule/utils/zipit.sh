#!/bin/bash

if [ -f "healthieSchedule.zip" ]; then
    rm ./healthieSchedule.zip
fi

cp ./package.json ./dist/package.json

cd dist

# remove unneeded files
rm -rf package-lock.json
rm -rf test


zip -r healthieSchedule.zip ./
cp healthieSchedule.zip ../../../dist/
cp healthieSchedule.zip ../
