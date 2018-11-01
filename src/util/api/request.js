import axios from "axios";


//失效状态还没有写，因为目前还没有确定怎样的判别方式，是token还是什么的。如果是后台返回，可以在路由里获取状态，直接跳转。
const request = (
    data,
    url,
    type = "POST",
    timeout = 10000,
    root = "",
    isFormData = true,
) => {
    const headers = { "Content-Type": "application/json" };
    if (isFormData) {
        headers["Content-Type"] = "multipart/form-data";
    }
    const options = {
        url: url,
        method: type,
        baseURL: "",
        headers: headers,
        timeout: timeout
    };
    if (type === "GET" || type === "DELETE") {
        options.params = data;
    } else {
        options.data = data;
    };

    return axios(options).then(response => {
        let { headers, data, status } = response;
        // let token = headers["x-auth-token"];
        // if (token) {
        //     window.localStorage.setItem("x-auth-token", token);
        // }
        let contentType = headers["content-type"];
        // if (status !== 200) {
        //     return Promise.reject(new Error("服务器请求失败"));
        // }

        //脑残记住登录状态
        if(data.login){
            window.localStorage.setItem('Login',data.login);
        }

        if (contentType && contentType.indexOf("application/json") !== -1) {
            // let { retCode, retMsg } = data;
            //
            // if (retCode !== 0 && retCode !== 16777218) {
            //     return Promise.reject(retMsg);
            // }
            // if (retCode === 16777218) {
            //     window.localStorage.removeItem("x-auth-token");
            //     // window.location.href = "/login" + "长时间未操作，请重新登陆";
            //     return Promise.reject(retMsg);
            // }
            return Promise.resolve(data);
        } else {
            return Promise.reject(new Error("the response is not JSON"));
        }
    });
};

export default request;
