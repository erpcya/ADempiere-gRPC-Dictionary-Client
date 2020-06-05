#####################################################################################
# Product: ADempiere Install protoc                                                 #
# Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      #
# Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      #
# This program is free software: you can redistribute it and/or modify              #
# it under the terms of the GNU General Public License as published by              #
# the Free Software Foundation, either version 3 of the License, or                 #
# (at your option) any later version.                                               #
# This program is distributed in the hope that it will be useful,                   #
# but WITHOUT ANY WARRANTY; without even the implied warranty of                    #
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     #
# GNU General Public License for more details.                                      #
# You should have received a copy of the GNU General Public License                 #
# along with this program.  If not, see <https://www.gnu.org/licenses/>.            #
#####################################################################################

###         PROTOC

## Get the latest version number of protoc
VERSION=$(curl -s https://github.com/protocolbuffers/protobuf/releases/latest/download 2>&1 | grep -Po [0-9]+\.[0-9]+\.[0-9]+)
CURRENT_VERSION=$(protoc --version)
echo protoc installed version: $CURRENT_VERSION
echo protoc donwload version: $VERSION
PROTOC_ZIP=protoc-$VERSION-linux-x86_64.zip

## Download and install the file
# TODO: Compare installed version and new version before starting the download
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v$VERSION/$PROTOC_ZIP
sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
sudo unzip -o $PROTOC_ZIP -d /usr/local 'include/*'
rm -f -v $PROTOC_ZIP

## Assign read and execute permissions
sudo chmod 755 /usr/local/bin/protoc
sudo chmod 755 -R /usr/local/include/google/


###         PROTOC-GEN-GRPC-WEB

## Get the latest version number of protoc-gen-grpc-web
VERSION_WEB=$(curl -s https://github.com/grpc/grpc-web/releases/latest/download 2>&1 | grep -Po [0-9]+\.[0-9]+\.[0-9]+)
FILE=protoc-gen-grpc-web
echo $FILE version: $VERSION_WEB

## Download and install the file
curl -L https://github.com/grpc/grpc-web/releases/download/$VERSION_WEB/$FILE-$VERSION_WEB-linux-x86_64 -o $FILE
sudo mv -f -v $FILE /usr/local/bin/

## Assign read and execute permissions
sudo chmod 755 /usr/local/bin/$FILE
