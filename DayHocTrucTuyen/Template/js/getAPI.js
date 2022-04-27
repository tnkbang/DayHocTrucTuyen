var OAUTHURL = 'https://accounts.google.com/o/oauth2/auth?';
var VALIDURL = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
var SCOPE = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
var CLIENTID = '754660186121-gn24vc791fea5ufc7k0eh4n3gs6bmo98.apps.googleusercontent.com';
var REDIRECT = 'https://localhost:44354';
var TYPE = 'token';
var _url = OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
var acToken;
var tokenType;
var expiresIn;
var user;

function loginWithGoogle() {
    var win = window.open(_url, "windowname1", 'width=800, height=600');
    var pollTimer = window.setInterval(function () {
        try {
            if (win.document.URL.indexOf(REDIRECT) != -1) {
                window.clearInterval(pollTimer);
                var url = win.document.URL;
                acToken = gup(url, 'access_token');
                tokenType = gup(url, 'token_type');
                expiresIn = gup(url, 'expires_in');

                win.close();
                validateToken(acToken);
            }
        }
        catch (e) {
        }
    }, 500);
}

function loginWithFacebook() {
    getThongBao('warning', 'Đang phát triển', 'Chức năng này đang trong quá trình phát triển, hiện tại không thể sử dụng !')
}

function gup(url, name) {
    namename = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\#&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return "";
    else
        return results[1];
}

function validateToken(token) {
    getUserInfo();
    $.ajax(
        {
            url: VALIDURL + token,
            data: null,
            success: function (responseText) {
            },
            error: function () {
                getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu đến Google !')
            }
        });
}

function getUserInfo() {
    $.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
        data: null,
        async: false,
        success: function (resp) {
            var file_img;
            user = resp;
            var request = new XMLHttpRequest();
            request.open('GET', user.picture, true);
            request.responseType = 'blob';
            var reader = new FileReader();
            request.onload = function () {
                reader.readAsDataURL(request.response);
                reader.onload = function (e) {

                    file_img = btof(e.target.result, "ImageUser");
                    var form_data = new FormData();

                    form_data.append('hoten', user.given_name);
                    form_data.append('email', user.email);
                    form_data.append('img_avt', file_img);
                    $.ajax({
                        url: '/Default/loginWithGoogle',
                        type: 'POST',
                        data: form_data,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            window.location.href = "/Default/Index";
                        },
                        error: function () {
                            getThongBao('error', 'Lỗi', 'Không thể gửi yêu cầu về máy chủ !')
                        }
                    });
                };
            };
            request.send();
        },
        error: function () {
            getThongBao('error', 'Lỗi', 'Không thể lấy thông tin người dùng từ Google !')
        }
    });
}

//Chuyển url hình ảnh thành file
function btof(data, fileName) {
    const dataArr = data.split(",");
    const byteString = atob(dataArr[1]);

    const options = {
        type: "image/jpeg",
        endings: "native"
    };
    const u8Arr = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        u8Arr[i] = byteString.charCodeAt(i);
    }
    return new File([u8Arr], fileName + ".jpg", options);
}