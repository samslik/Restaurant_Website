aws s3api create-bucket --acl public-read --create-bucket-configuration  LocationConstraint=eu-central-1  --bucket %1
aws s3 website s3://%1 --index-document index.html