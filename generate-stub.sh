#####################################################################################
# Product: ADempiere Generate Stub                                                  #
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

OUT_DIR=src/grpc

# Generate Stub to dictionary.proto file
protoc proto/dictionary.proto \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
