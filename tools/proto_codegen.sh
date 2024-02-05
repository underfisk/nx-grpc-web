#!/bin/bash

PROTO_DIR="libs/grpc/protobufs"
OUT_DIR="libs/grpc/src/lib/proto-ts"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

echo "Running codegen for protobufs"
PROTOC=`which protoc`

# remove previous generated codegen
rm -rf libs/grpc/src/lib/proto-ts
mkdir -p libs/grpc/src/lib/proto-ts

# see options at https://github.com/stephenh/ts-proto?tab=readme-ov-file#usage
TS_ARGS=('lowerCaseServiceMethods=true'
         'outputJsonMethods=false'
         'env=browser'
         'esModuleInterop=true'
         'exportCommonSymbols=false'
         'outputServices=nice-grpc'
         'outputServices=generic-definitions'
         'useExactTypes=false'
         'snakeToCamel=true')



for f in ${PROTO_DIR}/*.proto
do
  echo "Generate stubs for $f file"
  PROTOC --plugin=./node_modules/.bin/protoc-gen-ts_proto \
         --ts_proto_out=${OUT_DIR} \
         --proto_path=${PROTO_DIR} \
         --ts_proto_opt="$(IFS=, ; echo "${TS_ARGS[*]}")"\
         "$f"  
done

echo "Generating exports to a barrel file"

# Remove existing index.ts if it exists
if [ -e "$OUT_DIR/index.ts" ]; then
    rm "$OUT_DIR/index.ts"
fi

# Re-create the file (empty)
touch "$OUT_DIR/index.ts"

# Loop through all TypeScript files in the directory and generate export statements
for file in $(find "$OUT_DIR" -type f -name "*.ts" -not -name "index.ts"); do
    file_name=$(basename "$file" .ts)
    echo "exporting file: $file_name"
    echo "export * from './$file_name';" >> "$OUT_DIR/index.ts"
done

echo "Protobuf codegen has finished"
