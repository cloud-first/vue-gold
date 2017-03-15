<template>
  <div>
    <h1></h1>
    <h1>辅助菜单</h1>
    <ul>
      <li>
        <router-link
          :to="{path: '/list-coins?serverid=YXF16053120325978800016&areaid=YXQ16053120274791000015&gid=YX16053120241378200001&operatorId=undefined&operatorName=&gname=地下城与勇士&areaname=广东区&servername=广东1区&goodsType=3&typename=%2F%2F游戏币&gameImageUrl='}"
        >
          广东一区 无历史
        </router-link>
      </li>
      <li>
        <router-link
          :to="{path: '/list-coins?serverid=YXF16053120325978800016&areaid=YXQ16053120274791000015&gid=YX16053120241378200001&operatorId=undefined&operatorName=&gname=地下城与勇士&areaname=广东区&servername=广东1区&goodsType=3&typename=%2F%2F游戏币&gameImageUrl=',
                query: {'list': JSON.stringify(list)} }"
        >
          广东一区 有历史
        </router-link>
      </li>
      <li>
        <router-link
          to="/list-coins?serverid=YXF16053120330438300017&areaid=YXQ16053120274791000015&gid=YX16053120241378200001&operatorId=undefined&operatorName=&gname=地下城与勇士&areaname=广东区&servername=广东2区&goodsType=3&typename=%2F%2F游戏币&gameImageUrl=">
          广东二区
        </router-link>
      </li>
      <li>
        <router-link
          to="/list-coins?serverid=YXF16053120330995500018&areaid=YXQ16053120274791000015&gid=YX16053120241378200001&operatorId=undefined&operatorName=&gname=地下城与勇士&areaname=广东区&servername=广东3区&goodsType=3&typename=%2F%2F游戏币&gameImageUrl=">
          广东三区
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        list: {
          list: [{
            "name": localStorage.getItem('openid'),
            "phone": "18738161475",
            "QQ": "601819456"
          },{
            "name": "吃盖浇饭",
            "phone": "18738161475",
            "QQ": "601819456"
          },{
            "name": "吃盖浇饭",
            "phone": "18738161475",
            "QQ": "601819456"
          },{
            "name": "吃盖浇饭",
            "phone": "18738161475",
            "QQ": "601819456"
          },{
            "name": "吃盖浇饭",
            "phone": "18738161475",
            "QQ": "601819456"
          },
          ]
        }
      }
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul > li:nth-child(even) {
    background-color: #bbefa0;
  }

  ul > li:nth-child(odd) {
    background-color: #efbdcb;
  }

  li a {
    border-bottom: 1px solid gainsboro;
    padding: 20px 30px;
    display: block;
  }


</style>
