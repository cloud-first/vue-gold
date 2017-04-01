/**
 * Created by 严俊东 on 2017/3/23.
 */

/**
 * 发送验证码前的请求
 * @returns {Promise}
 */
function actionStart() {
    return new Promise((resolve) => {
        this._http.post(
            '/login/api/mobile-sms-service/rs/sms/actionstart',
            {},
            {
                headers: {
                    contentType: "application/json; charset=UTF-8",
                    dataType: "json"
                }
            }
        ).then(() => {
            resolve()
        }, () => {
            console.error("请求异常: actionStart ");
        })
    });
}
export {actionStart}