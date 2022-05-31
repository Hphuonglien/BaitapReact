import './header.css';

function Header() {
  return (
  <div>
      <div className="container">
        <div className="row top-header">
        <img className="logo col-2" src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" alt="" />
        <div className="col school-name">
            <p>ĐẠI HỌC BÁCH KHOA HÀ NỘI <br />
            TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</p>
        </div>
        <form className="d-flex col-2 search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
        </div>
      </div>
      <div className="line-head"></div>
      <nav className="navbar navbar-expand-lg navbar-light menu">
        <div className="container-fluid container ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Giới thiệu</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Thông tin chung</a></li>
                    <li><a className="dropdown-item" href="#">Triết lý giáo dục</a></li>
                    <li><a className="dropdown-item" href="#">Cơ cấu tổ chức</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Khoa - Trung tâm
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Khoa</a></li>
                    <li><a className="dropdown-item" href="#">Khoa học máy tính</a></li>
                    <li><a className="dropdown-item" href="#">Kỹ thuật máy tính</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Đào tạo
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Giới thiệu chung</a></li>
                    <li><a className="dropdown-item" href="#">Hệ đại học</a></li>
                    <li><a className="dropdown-item" href="#">Hệ thạc sỹ</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Nghiên cứu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Giới thiệu chung</a></li>
                    <li><a className="dropdown-item" href="#">Các phòng thí nghiệm</a></li>
                    <li><a className="dropdown-item" href="#">Đề tài - Dự án</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tuyển sinh
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Kiến tạo tương lai với SoICT</a></li>
                    <li><a className="dropdown-item" href="#">Tuyển sinh 2022!</a></li>
                    <li><a className="dropdown-item" href="#">Điểm chuẩn tham khảo</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sinh viên
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Biểu mẫu và quy định dành cho sinh viên</a></li>
                    <li><a className="dropdown-item" href="#">Cố vấn học tập</a></li>
                    <li><a className="dropdown-item" href="#">Hoạt động sinh viên nghiên cứu khoa học</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hợp tác Đối ngoại
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Giới thiệu chung</a></li>
                    <li><a className="dropdown-item" href="#">Hợp tác với khối hàn lâm</a></li>
                    <li><a className="dropdown-item" href="#">Hợp tác với khối doanh nghiệp</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cựu sinh viên
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Giới thiệu chung</a></li>
                    <li><a className="dropdown-item" href="#">Tấm gương cực sinh viên</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tin tức - Sự kiện
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Tin tức</a></li>
                    <li><a className="dropdown-item" href="#">Thông báo</a></li>
                    <li><a className="dropdown-item" href="#">Tin bài</a></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tuyển dụng
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Việc làm tại SoICT</a></li>
                    <li><a className="dropdown-item" href="#">Việc làm cho Sinh viên</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
      </nav>
  </div>

  );
}

export default Header;
