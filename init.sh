#!/bin/sh

#
# Initialise submodules
#
git submodule init
git submodule update


#
# Install npm dependencies
#
npm install