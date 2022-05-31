import './Main.css';
import './header.css'
function Main() {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                <img src={require("./image/banner1.png")} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                <img src={require("./image/banner2.png")} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                <img src={require("./image/banner3.png")} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                <img src={require("./image/banner4.png")} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
        <div className="line-head"></div>
        <div className="container">
            <h2 className="title">TIN MỚI NHẤT</h2>
                <div className="row content">
                <div className="new-news col">
                    <img src={require("./image/new1.jpg")} />
                    <h5>INNOVATION DAY VÀ CUỘC THI SÁNG TẠO Ý TƯỞNG SINH VIÊN CREATIVE</h5>
                    <p>Ngày 14/05/2022, Innovation Day 2022 đã diễn ra thành công với rất nhiều hoạt động, trải nghiệm thú vị, bao gồm: Tọa...</p>
                </div>
                <div className="new-news col">
                    <img src={require("./image/new2.jpg")} />
                    <h5>SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</h5>
                    <p>Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT, Đại học Bách khoa Hà Nội. Hoàn cảnh gia...</p>
                </div>
                <div className="new-news col">
                    <img src={require("./image/new3.jpg")} />
                    <h5>TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ</h5>
                    <p>Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng ý của Đoàn thanh niên Trường Đại...</p>
                </div>
                <div className="new-news col">
                    <img src={require("./image/new4.jpg")} />
                    <h5>Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ sư AI Vingroup Cơ hội Đào tạo,</h5>
                    <p>NẮM BẮT CƠ HỘI TRỞ THÀNH KỸ SƯ AI VINGROUP Nếu bạn đang băn khoăn về việc ứng tuyển tham gia chương...</p>
                </div>
                </div>
        </div>
        <div className="seemore"><a href="#">Xem thêm tin tức</a></div>
        <div className="ev-bg">
          <div className="event">
            <div className="container">
              <h2  className="title title-event">Sự kiện mới nhất</h2>
              <div className="event-content row">
                  <div className="event-item col">
                    <img src={require("./image/ev1.png")} />
                    <div>
                     <h5>INNOVATION DAY 2022</h5>
                     <p>Thời gian: 8:00 AM - 14/05/2022<br />
                     Địa điểm: Sảnh tầng 1-4 và Hội trường B1 - Trường Đại học Bách khoa Hà Nội</p>
                    </div>
                  </div>
                  <div className="event-item col">
                    <img src={require("./image/ev2.jpg")} />
                    <div>
                     <h5>CUỘC THI TÌM KIẾM Ý TƯỞNG SÁNG TẠO SINH VIÊN 2022</h5>
                     <p>Thời gian: 8:00 AM - 08/05/2022<br />
                     Địa điểm: Tòa nhà B1 - Đại học Bách khoa Hà Nội</p>
                    </div>
                  </div>
                  <div className="event-item col">
                    <img src={require("./image/ev3.jpg")} />
                    <div>
                     <h5>HỘI THẢO KHOA HỌC VỀ CÁC XU THẾ HIỆN TẠI VÀ TƯƠNG </h5>
                     <p>Thời gian: 2:00 PM - 06/05/2022<br />
                     Địa điểm: Hội trường dốc, tầng 3 nhà B1, Đại học Bách khoa Hà Nội</p>
                    </div>
                  </div>
                  <div className="event-item col">
                    <img src={require("./image/ev4.jpg")} />
                    <div>
                     <h5>HÀNH TRANG SINH VIÊN TRƯỚC KHI RA TRƯỜNG 2022</h5>
                     <p>Thời gian: 5:30 PM - 25/04/2022<br />
                     Địa điểm: Hội trường dốc B1</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="seemore"><a href="#">Xem thêm sự kiện</a></div>
          </div>
        </div>
        <div className="container">
          <h2 className="title">ĐÀO TẠO - TUYỂN SINH</h2>
          <div className="about">
            <p>Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS – Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường đang đảm nhận thuộc nhóm hạng từ 451 đến 500 trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.</p>
          </div>
          <div className="row edu">
            <div className="col edu-content">
              <img src={require("./image/edu1.jpg")} />
              <div>
                <h5>CHƯƠNG TRÌNH ĐÀO TẠO</h5>
                <p>Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó, có chương trình được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài. Các chương trình đào tạo thuộc vào 3 nhóm ngành chính: Khoa học Máy tính, Kỹ thuật Máy tính, và Khoa học Dữ liệu và Trí tuệ Nhân tạo…<a href="">(xem tiếp)</a></p>
              </div>
            </div>
            <div className="col edu-content">
              <img src={require("./image/edu2.jpg")} />
              <div>
                <h5>KIẾN TẠO TƯƠNG LAI VỚI SoICT</h5>
                <p>Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới nước nhà, và ngày càng chứng minh được chất lượng trên trường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọn phát triển tương lai với SoICT sẽ đem lại cho các bạn cơ hội trở thành các chuyên gia công nghệ, có khả năng làm chủ và dẫn dắt sự phát triển KHCN nước nhà…<a href=""> (xem tiếp)</a></p>
              </div>
            </div>

          </div>
        </div>

        <div className="cn-bg">
          <div className="cn">
            <div className="container">
              <h2  className="title title-event">HỢP TÁC - ĐỐI NGOẠI</h2>
              <div className="about">
                <p>Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc tế và hợp tác doanh nghiệp để nâng cao chất lượng các hoạt giảng dạy, nghiên cứu và chuyển giao công nghệ.</p>
              </div>
              <div className=" row">
                <div className="col cn-content">
                  <img src={require("./image/cn1.png")} />
                  <div>
                    <h5>CÁC TRƯỜNG ĐỐI TÁC</h5>
                    <p>Trường CNTT&TT có quan hệ hợp tác với nhiều trường đại học và viện nghiên cứu uy tín trên Thế giới. Thông qua hợp tác, sinh viên của Trường có cơ hội học tập, nghiên cứu tại các trường đối tác thông qua các học bổng trao đổi sinh viên, cũng như các dự án hợp tác nghiên cứu. Trường hợp tác với các đại học lớn ở Châu Âu, Nhật Bản… để cung cấp cho sinh viên các chương trình đào tạo song bằng (double degree), một hình thức “du học” kinh tế và hiệu quả… <a href="">(xem tiếp)</a></p>
                  </div>
                </div>
                <div className="col cn-content">
                  <img src={require("./image/cn2.jpg")} />
                  <div>
                    <h5>DOANH NGHIỆP ĐỐI TÁC</h5>
                    <p>Đào tạo và nghiên cứu rất cần sự hợp tác thực chất với cộng đồng doanh nghiệp. Trường hiện đang duy trì hợp tác với mạng lưới gồm hơn 130 doanh nghiệp CNTT trong và ngoài nước, trong đó có thể kể tới HEDSPI Supporting Partner Network (HEDSPI-SPN), mạng lưới hỗ trợ sinh viên tăng cường ngoại ngữ, phát triển kỹ năng mềm, cũng như làm quen với văn hóa DN để gia tăng sức cạnh tranh trong thị trường lao động quốc tế…<a href=""> (xem tiếp)</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
            <h2 className="title">CỰU SINH VIÊN</h2>
                <div className="row content">
                  <div className="new-news student col">
                      <img src={require("./image/sv1.jpg")} />
                      <div>
                        <h5>Hoàng Việt Anh - Chỉ có một tình yêu duy nhất</h5>
                        <p>Gia nhập FPT năm 1993, từ khi còn là sinh viên năm 3 khoa CNTT ĐH Bách Khoa...</p>
                      </div>
                  </div>
                  <div className="new-news student col">
                      <img src={require("./image/sv2.jpg")} />
                      <div>
                        <h5>Lữ Thành Long – Thủ lĩnh công nghệ</h5>
                        <p>Nhắc đến ngôi trường đã gắn bó suốt 5 năm học đại học, doanh nhân Lữ Thành...</p>
                      </div>
                  </div>
                  <div className="new-news student col">
                      <img src={require("./image/sv3.jpg")} />
                      <div>
                        <h5>Nguyễn Hà Đông – Cha đẻ Flappy Bird “náo loạn” Thế giới</h5>
                        <p>Tạp chí công nghệ Cnet của Mỹ công bố danh sách 25 ứng dụng có ảnh hưởng...</p>
                      </div>
                  </div>
                  <div className="new-news student col">
                      <img src={require("./image/sv4.jpg")} />
                      <div>
                        <h5>Hùng Trần – Tấm gương khởi nghiệp người Việt tại Silicon Valley</h5>
                        <p>“Gãi đúng chỗ ngứa” của người dùng Trần Việt Hùng là cựu nghiên cứu sinh Quỹ Giáo...</p>
                      </div>
                  </div>
                </div>
        </div>

        <div className="about-soict">
          <h2 className="title">NÓI VỀ SoICT</h2>
            <div className="soict">
              <div><img src={require("./image/talk.jpg")} /></div>
              <div className= "soict-div">
                <p className="soict-content">Sinh viên Trường CNTT&TT không chỉ được biết đến với nền tảng kiến thức kỹ thuật sắc bén và sự thích ứng tuyệt vời với bất kỳ nhiệm vụ nào được giao, mà còn được đánh giá cao bởi tư duy phản biện và sáng tạo. Trong SVMC, sinh viên ĐHBK Hà Nội nói chung và sinh viên Trường CNTT&TT nói riêng luôn giữ các vị trí quan trọng, và trở thành thành viên chủ chốt trong nhiều dự án cốt lõi của Trung tâm. Trường và SVMC đã củng cố mối quan hệ bền chặt, được thể hiện thông qua văn bản hợp tác chính thức, mở đường cho các hoạt động tài trợ tăng cường năng lực, cũng như học bổng cho sinh viên. Hiện tại, hơn 25% nhân viên của SVMC đã tốt nghiệp từ ĐHBK Hà Nội, trong đó có Trường CNTT&TT, và chúng tôi luôn mong muốn gia tăng số lượng này. SVMC luôn đánh giá cao hiệu quả hợp tác với Trường CNTT&TT – một đối tác chiến lược toàn diện của SVMC tại Việt Nam.</p>
                <p><b>Ông Kim In Soo</b><br />
                Tổng Giám đốc Trung tâm Nghiên cứu và Phát triển Điện thoại Di động Samsung Việt Nam (SVMC)</p>
              </div>
            </div>   
        </div>
        <div className="about-us">
          <div className="container">
            <h2 className="title">VỀ CHÚNG TÔI</h2>
            <div className="us row">
              <div className="us-item col">
                <p className="title-us">QS ranking 2022</p>
                <p className="number-us">401 – 450</p>
                <p className="des-us">trên Thế giới trong nhóm ngành Khoa học Máy tính và Hệ thống Thông tin</p>
              </div>
              <div className="us-item col">
                <p className="title-us">Sinh viên thuộc TOP</p>
                <p className="number-us">1%</p>
                <p className="des-us">điểm cao nhất Khối A Toàn quốc mùa Tuyển sinh 2019</p>
              </div>
              <div className="us-item col">
                <p className="title-us">Sinh viên</p>
                <p className="number-us">4.000+</p>
                <p className="des-us"></p>
              </div>
              <div className="us-item col">
                <p className="title-us">Chương trình đào tạo</p>
                <p className="number-us">17+</p>
                <p className="des-us">thuộc các hệ đào tạo cử nhân, kỹ sư, thạc sỹ khoa học, tiến sỹ</p>
              </div>
              <div className="us-item col">
                <p className="title-us">Đối tác</p>
                <p className="number-us">200+</p>
                <p className="des-us">các trường đại học, viện nghiên cứu, tập đoàn, công ty trong nước và quốc tế</p>
              </div>
            </div>   
          </div>
        </div>
        <div className="container video">
          <h2 className="title">VIDEO</h2>
          <div className="row">
            <iframe className="col" width="560" height="315" src="https://www.youtube.com/embed/xneEk-rNqFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className="col" width="560" height="315" src="https://www.youtube.com/embed/KA6zETZJ-4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className="col" width="560" height="315" src="https://www.youtube.com/embed/zg_oi1w8jrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="seemore"><a href="#">Xem thêm video</a></div>

    </div>

  );
}

export default Main;
