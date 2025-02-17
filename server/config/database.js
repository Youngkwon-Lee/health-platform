const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/health-platform', { // MongoDB URI
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB 연결 성공');
  } catch (error) {
    console.error('MongoDB 연결 에러:', error);
    process.exit(1); // 연결 실패 시 애플리케이션 종료
  }
};

module.exports = connectDB;
