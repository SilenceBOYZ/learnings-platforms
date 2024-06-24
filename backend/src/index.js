const express = require("express");
// const fs = require("fs");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression")
const route = require("./routes");
const PORT = 5000;

app.use(morgan("dev"));
app.use(helmet());
app.use(compression());




// const videoFileMap = {
//   'videoPractice1': 'videos/videoHuongdan1.mp4',
//   'videoPractice2': 'videos/videoHuongdan2.mp4',
//   'videoPractice3': 'videos/videoHuongdan3.mp4',
// }

// app.get('/videos/:filename', (req, res) => {
//   const filename = req.params.filename;
//   const filePath = videoFileMap[filename];
//   if (!filePath) return res.status(404).send("File not found");
//   // Method statSync sẽ trả về một object chứa thông tin của file
//   // Từ đó ta có thể lấy được kích thước của file đó
//   const stat = fs.statSync(filePath);
//   const fileSize = stat.size;
//    const range = req.headers.range;
//   if (range) {
//     const parts = range.replace(/bytes=/, '').split('-');
//     const start = parseInt(parts[0], 10);
//     const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
//     const chunksize = end - start + 1;
//     const file = fs.createReadStream(filePath, { start, end });

//     const head = {
//       'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//       'Accept-Ranges': 'bytes',
//       'Content-Length': chunksize,
//       'Content-Type': 'video/mp4',
//     }
//     res.writeHead(206, head);
//     file.pipe(res);
//   } else {
//     const head = {
//       'Content-Length': fileSize,
//       'Content-Type': 'video/mp4',
//     }
//     res.writeHead(200, head);
//     fs.createReadStream(filePath).pipe(res);
//   }
// });

route(app);

app.listen(PORT, () => {
  console.log('server listening on port', PORT);
})