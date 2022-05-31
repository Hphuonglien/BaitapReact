import './footer.css';


function Footer() {
  return (
    
  <div class="footer">
      <div class="container footer-content">
            <div class="row">
                <div class="col">
                    <span>KHOA – TRUNG TÂM</span>
                    <ul>
                        <li>Khoa học Máy tính</li>
                        <li>Kỹ thuật Máy tính</li>
                        <li>Trung tâm Cyber Security</li>
                        <li>Trung tâm Đổi mới Sáng tạo</li>
                        <li>Trung tâm Máy tính và Thực hành</li>
                        <li>Trung tậm Nghiên cứu Quốc tế về Định vị sử dụng vệ tinh (NAVIS)</li>
                        <li>Trung tâm Nghiên cứu Quốc tế về Trí tuệ nhân tạo</li>
                        <li>Văn Phòng Trường</li>
                    </ul>
                </div>
                <div class="col">
                    <span>HỆ THỐNG VÀ TÀI NGUYÊN</span>
                    <ul>
                        <li>Chương trình Việt Nhật (HEDSPI)</li>
                        <li>Chương trình Global ICT</li>
                        <li>Chương trình Khoa học dữ liệu và trí tuệ nhân tạo</li>
                        <li>Chương trình Thạc sỹ Chuyển đổi số</li>
                        <li>Các chương trình đại học</li>
                        <li>Các chương trình thạc sỹ</li>
                        <li>Các chương trình tiến sỹ</li>
                        <li>Các chương trình đào tạo ngắn hạn</li>
                    </ul>
                </div>
                <div class="col">
                    <span>CHƯƠNG TRÌNH ĐÀO TẠO</span>
                    <ul>
                        <li>Hệ thống Quản lý Đào tạo</li>
                        <li>Hệ thống Quản lý Hợp tác Doanh nghiệp</li>
                        <li>Các mẫu biểu dành cho sinh viên Viện</li>
                    </ul>
                </div>
                <div class="col">
                    <img src={require("./image/logo-footer.png")} />
                    <p> (+84) 24 3869 2463<br />
                    vp@soict.hust.edu.vn<br />
                    P. 505 – Nhà B1 – Đại học Bách khoa Hà Nội<br />
                    Số 1 Đại Cồ Việt – Hai Bà Trưng – Hà Nội</p>
                </div>
            </div>
      </div>

  </div>

  );
}

export default Footer;
