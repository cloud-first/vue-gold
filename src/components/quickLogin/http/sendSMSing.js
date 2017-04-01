/**
 * Created by 严俊东 on 2017/3/23.
 */

/**
 * 发送验证码
 * @param body // post参数
 * @returns {*}
 */
function sendSMSing(body) {
    return new Promise((resolve)=> {
        this._http.post(
            '/login/api/mobile-sms-service/rs/sms/sendloginverifycode',
            body,
            {
                headers: {
                    contentType: "application/json; charset=UTF-8",
                    dataType: "json"
                }
            }
        ).then((res)=> {
            resolve(res.body);
        }, ()=> {
            console.log("请求异常： sendSMSSing（发送验证码）")
        })
    });
};

export {sendSMSing}