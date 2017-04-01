/**
 * Created by 严俊东 on 2017/3/23.
 */

/**
 * 设置cookie
 * @param c_name
 * @param value
 * @param expiredays
 */
function setCookie(c_name, value, expiredays) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

export  {setCookie}