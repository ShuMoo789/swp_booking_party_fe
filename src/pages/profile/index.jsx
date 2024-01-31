<>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Main CSS */}
  <link rel="stylesheet" type="text/css" href="adimin.scss" />
  {/* or */}
  <link rel="stylesheet" type="text/css" href="profile.scss" />
  {/* Font-icon CSS */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            /* Add the pink color styling for the user profile header */\n            .profile-header {\n                background-color: #f0a7b9; /* Pink color */\n                color: #fff; /* White text color */\n                padding: 15px; /* Adjust padding as needed */\n                text-align: center;\n            }\n    \n            /* Additional styling for the user profile header */\n            .profile-header h1 {\n                margin-bottom: 5px;\n            }\n    \n            .profile-header h6 {\n                margin-bottom: 20px;\n            }\n        "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n            body {\n                font-family: \'Roboto\', sans-serif;\n            }\n\n            h1 {\n                text-align: center;\n            }\n\n            h6 {\n                text-align: center;\n            }\n\n            .form-container {\n                max-width: 400px;\n                margin: 0 auto;\n                padding: 20px;\n                border: 1px solid #ccc;\n                border-radius: 5px;\n            }\n\n            .form-container label {\n                display: block;\n                margin-bottom: 5px;\n                font-weight: bold;\n            }\n\n            .form-container input[type="text"] {\n                width: 100%;\n                padding: 5px;\n                border: 1px solid #ccc;\n                border-radius: 5px;\n            }\n\n            .form-container .form-group {\n                margin-bottom: 5px;\n            }\n\n            .form-container .btn-container {\n                text-align: center;\n                margin-top: 20px;\n            }\n\n            .form-container .btn-container input[type="submit"] {\n                padding: 5px 10px;\n                background-color: #4CAF50;\n                color: #fff;\n                border: none;\n                border-radius: 5px;\n                cursor: pointer;\n            }\n        '
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .btn-check-status {\n                background-color: #4CAF50; /* Màu nền */\n                color: white; /* Màu chữ */\n                padding: 5px 10px; /* Kích thước nút */\n                border: none; /* Loại bỏ viền */\n                border-radius: 5px; /* Bo tròn góc */\n                cursor: pointer; /* Hiệu ứng con trỏ */\n                font-size: 14px; /* Cỡ chữ */\n            }\n\n            .btn-check-status:hover {\n                background-color: #45a049; /* Màu nền khi hover */\n            }\n        "
    }}
  />
  <div className="profile-header">
    <h1>User Profile</h1>
  </div>
  <form action="UserServlet?action=editProfile" method="POST">
    <div
      className="container emp-profile"
      style={{ marginTop: 150, marginLeft: 336 }}
    >
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img
              src="img/${sessionScope.userlogin.image}"
              alt="User avatar"
              id="avatarPreview"
            />
            <div className="file btn btn-lg btn-primary">
              Change Photo
              <input
                type="file"
                id="newAvatar"
                name="image"
                onchange="previewImage(this)"
              />
              <input
                type="hidden"
                name="oldimage"
                defaultValue="${sessionScope.userlogin.image}"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ibox">
            <div className="ibox-body">
              <ul className="nav nav-tabs tabs-line">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#tab-1"
                    data-toggle="tab"
                  >
                    <i className="ti-settings" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab-1">
          <input name="id" type="text" hidden="" />
          <input name="role" type="text" hidden="" />
          <input name="gender" type="text" hidden="" />
          <input name="password" type="password" hidden="" />
          <div className="form-group">
            <label>Tên đệm</label>
            <input
              name="firstname"
              className="form-control"
              readOnly=""
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label>Tên</label>
            <input
              name="lastname"
              className="form-control"
              readOnly=""
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              className="form-control"
              readOnly=""
              type="text"
              placeholder="Email address"
            />
          </div>
          <div className="form-group">
            <label>Địa chỉ</label>
            <input
              name="address"
              className="form-control"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <label>Ngày sinh</label>
            <input
              name="birthday"
              className="form-control"
              type="text"
              placeholder="Birthday"
            />
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              name="phone"
              className="form-control"
              readOnly=""
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <input className="btn btn-default" type="submit" />
          </div>
        </div>
      </div>
      <a className="btn btn-default" href="changepassword.jsp">
        Thay đổi mật khẩu
      </a>
    </div>
  </form>
  a&gt;
  {/*                      <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal"
        data-target="#ModalUP" onclick="getData('${sessionScope.userlogin.id}"><i class="fas fa-edit"></i></button>  
        <div class="modal fade" id="ModalUP" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static"
       data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">

              <div class="modal-body">
                  <div class="row">
                      <div class="form-group  col-md-12">
                          <span class="thong-tin-thanh-toan">
                              <h5>Chỉnh sửa thông tin nhân viên cơ bản</h5>
                          </span>
                      </div>
                  </div>

                  <form action="ChangPassword" method="POST" id="changepasswords">


                  </form>    */}
</>
