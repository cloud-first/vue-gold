/**
 * Created by 严俊东 on 2017/3/23.
 */

/**
 *  退出登录
 * @returns {*}
 */
function loginOut() {
    return new Promise((resolve) => {
        this._http.post(
            '/api/mobile-user-service/rs/account/logout',
            {},
            {
                headers: {
                    contentType: "application/json; charset=UTF-8",
                    dataType: "json"
                }
            }
        ).then(() => {
            resolve();
        }, () => {
            console.error("请求异常： loginOut")
        })
    })
};

export {loginOut}