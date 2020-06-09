# Generate Stub to dictionary.proto file
protoc proto/dictionary.proto \
--js_out=import_style=commonjs:src/grpc \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc
