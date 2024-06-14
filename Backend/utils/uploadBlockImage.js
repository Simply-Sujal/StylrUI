import { S3Client } from '@aws-sdk/client-s3';
import multer from 'multer';
import multerS3 from 'multer-s3';

// Create an S3 client using AWS SDK v3
const s3Client = new S3Client({
    region: process.env.S3_BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
    },
});

const uploadBlockImage = multer({
    storage: multerS3({
        s3: s3Client,
        bucket: process.env.S3_BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, `block-images/${Date.now().toString()}-${file.originalname}`);
        }
    }),
    fileFilter: function (req, file, cb) {
        if (file.mimetype !== 'image/webp') {
            return cb(new Error('Only .webp format allowed!'), false);
        }
        cb(null, true);
    },
    limits: { fileSize: 250 * 1024 } // 250 KB size limit
});

export default uploadBlockImage;
